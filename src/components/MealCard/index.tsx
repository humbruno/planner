import React from "react";
import { Meal } from "~/types";

const Ingredient = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="cursor-default rounded-xl bg-slate-400 p-2 text-sm text-slate-800">
      {children}
    </div>
  );
};

interface Props {
  meal: Meal;
}

const MealCard = ({ meal }: Props) => {
  return (
    <div className="flex max-w-xs cursor-pointer flex-col items-center justify-center rounded-2xl bg-slate-200 p-3 transition-all duration-150 ease-in-out hover:scale-105">
      <h2 className="text-xl font-bold">{meal.name}</h2>
      <ul className="flex flex-wrap gap-1 pt-3">
        {meal.ingredients.map((ingredient) => (
          <li key={ingredient}>
            <Ingredient>{ingredient}</Ingredient>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealCard;
