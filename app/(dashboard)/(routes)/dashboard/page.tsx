import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div>
      Dashboard
      <UserButton afterSignOutUrl={"/dashboard"} />
    </div>
  );
}
