import type { GetServerSidePropsContext } from "next";
import { useSession, signOut } from "next-auth/react";
import { getServerAuthSession } from "~/lib/auth";
import { type NextPageWithLayout } from "~/pages/_app";
import AppLayout from "~/components/layouts/AppLayout";
import { useEffect, useState } from "react";
import { getMealsFromProfile } from "~/services/meals/getMealsFromProfile";
import { Meal } from "~/types";
import MealCard from "~/components/MealCard";

const Home: NextPageWithLayout = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    try {
      setIsLoading(true);
      getMealsFromProfile().then((res) => setMeals(res));
    } catch (error) {
      let message = "Something went wrong, try again.";

      if (error instanceof Error) {
        message = error.message;
      }

      console.log(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="px-36 py-20">
      <div>
        {meals.map((meal) => (
          <MealCard meal={meal} key={meal.id} />
        ))}
      </div>
    </section>
  );
};

Home.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default Home;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getServerAuthSession(ctx);

  // If the user is not logged in, redirect to log in page
  if (!session) {
    return { redirect: { destination: "/login" } };
  }

  return {
    props: {},
  };
};
