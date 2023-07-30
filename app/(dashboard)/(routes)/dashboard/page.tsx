"use client";

import { ArrowRight, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const tools = [
  {
    label: "Conversation",
    href: "/conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-50",
  },
];

export default function Dashboard() {
  return (
    <div>
      <div className={"mb-8 space-y-4"}>
        <h2 className={"text-2xl md:text-4xl font-bold"}>
          Explore the power of AI
        </h2>
        <p
          className={
            "text-muted-foreground font-light text-sm md:text-lg text-center"
          }
        >
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>

      <div className={"px-4 md:px-20 lg:px-32 space-y-4"}>
        {tools.map((tool) => (
          <Card
            key={tool.label}
            {...tool}
            className={
              "p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
            }
          >
            <div className={"flex items-center gap-x-4"}>
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn(tool.color, "w-8 h-8", tool.color)} />
              </div>

              <div className={"font-semibold"}>{tool.label}</div>
            </div>

            <ArrowRight className={"w-5 h-5"} />
          </Card>
        ))}
      </div>
    </div>
  );
}
