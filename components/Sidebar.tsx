"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  weight: "600",
  style: "normal",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    href: "/conversation",
    icon: MessageSquare,
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    href: "/image",
    icon: ImageIcon,
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    href: "/video",
    icon: VideoIcon,
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    href: "/music",
    icon: MusicIcon,
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    href: "/code",
    icon: Code,
    color: "text-green-700",
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

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
          <Link
            className={"flex items-center pl-3 mb-14 relative w-full h-12"}
            href={"/dashboard"}
          >
            <Image fill alt={"logo"} src={"/logo.svg"} />
          </Link>

          <div className={"space-y-1"}>
            {routes.map((route) => (
              <Link
                className={
                  "text-sm group p-3 flex w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
                }
                href={route.href}
                key={route.href}
              >
                <div className={"flex items-center flex-1"}>
                  <route.icon className={cn("w-6 h-6 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
