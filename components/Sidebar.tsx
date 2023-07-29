"use client";

import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div
      className={
        "hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900"
      }
    >
      <div
        className={
          "space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white"
        }
      >
        <div className={"px-3 py-2 flex-1"}>
          <Link className={"flex items-center pl-3 mb-14"} href={"/dashboard"}>
            <div className={"relative w-full h-12 mr-4"}>
              <Image fill alt={"logo"} src={"/logo.svg"} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
