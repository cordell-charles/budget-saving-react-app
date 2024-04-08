// react router dom imports
import { redirect } from "react-router-dom";

// library imports
import { toast } from "react-toastify";

// helper functions
import { deleteItem, getAllMatchingItems } from "../helpers";

export function deleteBudget({ params }) {
  try {
    deleteItem({ key: "budgets", id: params.id });

    const associatedExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });

    associatedExpenses.forEach(({ id }) => deleteItem({ key: "expenses", id }));

    toast.success("Budget deleted successfully!");
  } catch (e) {
    throw new Error("There was a problem deleting your budget");
  }

  return redirect("/");
}
