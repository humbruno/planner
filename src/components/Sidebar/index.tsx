import { useSession } from "next-auth/react";
import { FiLogOut, FiUser } from "react-icons/fi";
import WithTooltip from "~/components/WithTooltip";

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <nav className="flex min-h-screen w-52 flex-col items-center justify-between rounded-r-3xl bg-slate-900 px-5 py-10">
      <img
        className="w-24 rounded-full border-2 border-solid border-white"
        src={session?.user.image as string}
      />
      <div className="border-solid- border-slate-150 flex w-52 flex-col items-center justify-center border-t-2">
        <span className="flex items-center gap-1 pt-4">
          <FiUser size={"20px"} color="#fff" />
          <p className="text-white">{session?.user.name}</p>
        </span>
        <span className="cursor-pointer pt-3">
          <WithTooltip tooltipText="Logout">
            <FiLogOut size={"20px"} color="#fff" />
          </WithTooltip>
        </span>
      </div>
    </nav>
  );
};

export default Sidebar;
