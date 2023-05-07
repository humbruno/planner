import type { GetServerSidePropsContext, NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import { getServerAuthSession } from "~/server/auth";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      Signed in as {session?.user.name} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
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
