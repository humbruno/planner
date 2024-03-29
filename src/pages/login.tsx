import type { NextPage, GetServerSidePropsContext } from "next";
import type { BuiltInProviderType } from "next-auth/providers";
import {
  type ClientSafeProvider,
  type LiteralUnion,
  getProviders,
  signIn,
} from "next-auth/react";
import LoginButton from "~/components/LoginButton";
import { getServerAuthSession } from "~/lib/auth";

interface Props {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
}

const Login: NextPage<Props> = ({ providers }) => {
  return (
    <main className="container flex min-h-screen min-w-full items-center justify-center bg-slate-900">
      <div className="container-md flex flex-col items-center justify-center gap-3">
        {Object.values(providers).map((provider) => (
          <LoginButton
            key={provider.name}
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </LoginButton>
        ))}
      </div>
    </main>
  );
};

export default Login;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getServerAuthSession(ctx);

  // If the user is already logged in, redirect to home page.
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
