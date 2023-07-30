"use client";

import { Heading } from "@/components/Heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "@/app/(dashboard)/(routes)/conversation/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

const ConversationPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <Heading
        title={"Conversation"}
        description={"Our most advanced conversation model."}
        icon={MessageSquare}
        iconColor={"text-violet-500"}
        bgColor={"bg-violet-500/10"}
      />

      <div className={"px-4 lg:px-8"}>
        <div>
          <Form {...form}>
            <form
              className={
                "rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
              }
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                render={({ field }) => (
                  <FormItem
                    className={"col-span-12 lg:col-span-10"}
                    {...field}
                    label={"Prompt"}
                  >
                    <FormControl className={"m-0 p-0"}></FormControl>
                  </FormItem>
                )}
                name={"prompt"}
                label={"Prompt"}
              />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
