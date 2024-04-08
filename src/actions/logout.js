// react router dom imports
import { redirect } from "react-router-dom";

// library
import { toast } from "react-toastify";

// helpers
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // Delete the user
  deleteItem({ key: "userName" });

  // Delete budgets
  deleteItem({ key: "budgets" });

  // Delete expenses
  deleteItem({ key: "expenses" });

  toast.success("You've deleted your account!");

  // Return a redirect
  return redirect("/");
}
