import { type NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (!session) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.replace("/login");
    }
  }, [session, router]);

  return (
    <>
      Signed in as {session?.user.name} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default Home;
