import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className={"flex items-center p-4"}>
      <Button className={"md:hidden"} size={"icon"} variant={"ghost"}>
        <Menu />
      </Button>

      <div className={"flex w-full justify-end"}>
        <UserButton afterSignOutUrl={"/dashboard"} />
      </div>
    </div>
  );
};

export default Navbar;
