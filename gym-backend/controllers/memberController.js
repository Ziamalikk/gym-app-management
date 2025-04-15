const Member = require('../models/Member');
const bcrypt = require('bcryptjs');

/**
 * @desc    Add a new member
 * @route   POST /api/members
 * @access  Private/Admin
 */
const addMember = async (req, res) => {
  try {
    // Destructure required fields
    const { memberId, name, email, phone, membershipType, startDate, password } = req.body;

    // Validate required fields
    const missingFields = [];
    if (!memberId) missingFields.push('memberId');
    if (!name) missingFields.push('name');
    if (!email) missingFields.push('email');
    if (!phone) missingFields.push('phone');
    if (!membershipType) missingFields.push('membershipType');
    if (!startDate) missingFields.push('startDate');
    if (!password) missingFields.push('password');

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`,
        fields: missingFields
      });
    }

    // Check for existing member
    const existingMember = await Member.findOne({ 
      $or: [{ memberId }, { email }, { phone }]
    });

    if (existingMember) {
      const duplicateFields = [];
      if (existingMember.memberId === memberId) duplicateFields.push('memberId');
      if (existingMember.email === email) duplicateFields.push('email');
      if (existingMember.phone === phone) duplicateFields.push('phone');

      return res.status(409).json({
        success: false,
        message: `Duplicate values found: ${duplicateFields.join(', ')}`,
        fields: duplicateFields
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new member
    const member = await Member.create({
      memberId,
      name,
      email,
      phone,
      membershipType,
      startDate: new Date(startDate),
      endDate: req.body.endDate ? new Date(req.body.endDate) : undefined,
      password: hashedPassword,
      role: req.body.role || 'member'
    });

    // Remove password from response
    const memberData = member.toObject();
    delete memberData.password;

    return res.status(201).json({
      success: true,
      message: 'Member created successfully',
      data: memberData
    });

  } catch (err) {
    console.error('Error in addMember:', err);

    // Mongoose validation error
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => ({
        field: e.path,
        message: e.message
      }));

      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    // Other errors
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

module.exports = {
  addMember
};