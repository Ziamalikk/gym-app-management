const express = require('express');
const { addMember } = require('../controllers/memberController'); // ✅ Correct name

const router = express.Router();

// POST /api/members
router.post("/", addMember);

module.exports = router;
