import { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { deleteMember } from "@/services/memberService";

const DeleteConfirmation = ({ member, fetchMembers }) => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // ✅ Success popup state
  const [openConfirmPopup, setOpenConfirmPopup] = useState(false); // ✅ Confirmation popup state

  const handleDelete = async () => {
    const success = await deleteMember(member.memberId);
    if (success) {
      setShowSuccessPopup(true);  // ✅ Show success popup
      setOpenConfirmPopup(false); // ✅ Close confirmation popup
      fetchMembers();              // ✅ Fetch updated member list
    }
  };

  return (
    <>
      {/* ✅ Delete Button (Opens Confirmation Dialog) */}
      <AlertDialog open={openConfirmPopup} onOpenChange={setOpenConfirmPopup}>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" size="sm">Delete</Button>
        </AlertDialogTrigger>

        {/* ✅ Confirmation Popup */}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete <strong>{member.name}</strong>.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* ✅ Success Popup (Appears After Deletion) */}
      <AlertDialog open={showSuccessPopup} onOpenChange={setShowSuccessPopup}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Member Deleted</AlertDialogTitle>
            <AlertDialogDescription>
              <strong>{member.name}</strong> has been successfully removed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowSuccessPopup(false)}>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteConfirmation;
