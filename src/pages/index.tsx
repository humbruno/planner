import type { GetServerSidePropsContext } from "next";
import { useSession, signOut } from "next-auth/react";
import { getServerAuthSession } from "~/lib/auth";
import { type NextPageWithLayout } from "~/pages/_app";
import AppLayout from "~/components/layouts/AppLayout";

const Home: NextPageWithLayout = () => {
  const { data: session } = useSession();

  return (
    <>
      Signed in as {session?.user.name} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
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
