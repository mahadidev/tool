"use client";
import Chat from "@/components/chat";
import { Section } from "@/components/common";
import { Button } from "flowbite-react";
import React from "react";

const HomeChat = () => {
  return (
    <>
      <Section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-40 items-center">
          <div>
            <Chat className="w-full max-w-[600px]" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              Start Conversation with <span className="text-secondary">AI</span>{" "}
              messenger.
            </h1>
            <p className="text-base text-gray-600 mt-4">
              Irure ex reprehenderit amet eu. Cillum commodo ex sit mollit irure
              nisi. Veniam laboris voluptate id duis elit et officia sit ea
              exercitation. Commodo est aliquip culpa laborum culpa sit
              excepteur ullamco est eiusmod do.Exercitation est proident
              voluptate dolor ex laboris quis adipisicing. In ut velit excepteur
              quis ex ut officia sint nisi reprehenderit. Anim cupidatat
              occaecat nulla cillum sunt ad aliquip do tempor tempor.
            </p>
            <Button className="mt-4" color={"dark"}>
              Get Now.
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomeChat;
