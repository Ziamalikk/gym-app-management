const BASE_URL = "http://localhost:5000/api";

// ✅ Add New Member (POST)
export async function addMembers(values) {
  try {
    const response = await fetch(`${BASE_URL}/members`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add member");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error; // Propagate error to UI
  }
}

// // ✅ Fetch All Members (GET)
// export async function fetchMembers() {
//   try {
//     const response = await fetch(`${BASE_URL}/members`);
//     if (!response.ok) throw new Error("Failed to fetch members");
//     return await response.json();
//   } catch (error) {
//     console.error("Fetch Error:", error);
//     throw error;
//   }
// }

// // ✅ Update Member (PUT)
// export async function updateMember(memberId, updatedData) {
//   try {
//     const response = await fetch(`${BASE_URL}/members/${memberId}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(updatedData),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Failed to update member");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Update Error:", error);
//     throw error;
//   }
// }

// // ✅ Delete Member (DELETE)
// export async function deleteMember(memberId) {
//   try {
//     const response = await fetch(`${BASE_URL}/members/${memberId}`, {
//       method: "DELETE",
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Failed to delete member");
//     }

//     return true;
//   } catch (error) {
//     console.error("Delete Error:", error);
//     throw error;
//   }
// }