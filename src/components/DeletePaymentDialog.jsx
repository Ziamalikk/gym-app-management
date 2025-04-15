import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { deletePayment } from "@/services/billingService";
import { toast } from "sonner"; // ✅ Toast for success/error

const DeleteConfirmation = ({ payment, fetchPayments }) => {
  const handleDelete = async () => {
    const success = await deletePayment(payment.paymentId);
    if (success) {
      toast.success("Payment deleted successfully!");
      fetchPayments(); // ✅ Refetch payments to update the table
    } else {
      toast.error("Failed to delete payment.");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. The payment for {payment.memberName} will be permanently deleted.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>
            Confirm Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteConfirmation;
