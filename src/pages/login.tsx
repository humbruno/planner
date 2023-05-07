import { type GetServerSideProps, type NextPage } from "next";
import { type BuiltInProviderType } from "next-auth/providers";
import {
  type ClientSafeProvider,
  type LiteralUnion,
  getProviders,
  signIn,
  useSession,
} from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import LoginButton from "~/components/LoginButton";

interface Props {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
}

const Login: NextPage<Props> = ({ providers }) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.replace("/");
    }
  }, [session, router]);

  return (
    <main className="container flex min-h-screen min-w-full items-center justify-center bg-slate-900">
      <div className="container-md flex flex-col items-center justify-center gap-3 rounded-3xl bg-slate-700 px-20 py-10">
        {Object.values(providers).map((provider) => (
          <LoginButton key={provider.name} onClick={() => signIn(provider.id)}>
            Login with {provider.name}
          </LoginButton>
        ))}
      </div>
    </main>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
