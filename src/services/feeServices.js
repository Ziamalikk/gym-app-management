const BASE_URL = "https://your-api-endpoint.com/members"; // ✅ Replace with actual API URL

// ✅ Add New Member (POST)
export async function addFeePackage(values) {

  try {
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) throw new Error("Failed to add member");

    return await response.json(); // ✅ Return added member details
  } catch (error) {
    console.error("Error adding member:", error);
    return null;
  }
};




export async function  fetchFeePackages(){
    try {
      const response = await fetch("https://your-api-endpoint.com/members"); // ✅ Replace with your actual API URL
      if (!response.ok) {
        throw new Error("Failed to fetch members");
      }
      const data = await response.json();
      return data; // ✅ Return fetched data dynamically
    } catch (error) {
      console.error("Error fetching members:", error);
      return [];
    }
  };

  // ✅ Update Member (PUT)
  export async function updateFeePackage(memberId, updatedData) {
    try {
      const response = await fetch(`${BASE_URL}/${memberId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
  
      if (!response.ok) throw new Error("Failed to update member");
  
      return await response.json(); // ✅ Return updated member details
    } catch (error) {
      console.error("Error updating member:", error);
      return null; // ❌ Return null if update fails
    }
  }
  
  // ✅ Fetch Single Member by ID (GET)

  
  

// ✅ Delete Member (DELETE)
export async function deleteFeePackage(memberId) {
  try {
    const response = await fetch(`${BASE_URL}/${memberId}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Failed to delete member");

    return true; // ✅ Return true on successful deletion
  } catch (error) {
    console.error("Error deleting member:", error);
    return false; // ❌ Return false if deletion fails
  }
}
