const BASE_URL = "https://your-api-endpoint.com/members"; // ✅ Replace with actual API URL

// ✅ Add New Member (POST)
export async function addPayment(values) {

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




export async function  fetchPayments(){
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


  export async function deletePayment(paymentId) {
    try {
      const response = await fetch(`${BASE_URL}/${paymentId}`, {
        method: "DELETE",
      });
  
      if (!response.ok) throw new Error("Failed to delete payment");
  
      return true; // ✅ Successfully deleted
    } catch (error) {
      console.error("Error deleting payment:", error);
      return false;
    }
  }
  