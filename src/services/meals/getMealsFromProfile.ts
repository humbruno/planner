import { Meal } from "~/types";

export async function getMealsFromProfile() {
  const res = await fetch("/api/meals");

  if (!res.ok) {
    throw new Error("Something went wrong fetching the data.");
  }

  const data = await res.json();

  return data.data as Meal[];
}
