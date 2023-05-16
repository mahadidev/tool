"use client";
import Chat from "@/components/chat";
import { Section } from "@/components/common";
import { Button, Card } from "flowbite-react";
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const HomePDF = () => {
  return (
    <>
      <Section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-40 items-center">
          <div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              Chat with <span className="text-primary">PDF</span>
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
          <div>
            <Card className="!shadow-box !py-12 !border-0">
              <div className="w-full max-w-[400px] py-8 border-dotted border-2 border-primary rounded-md mx-auto">
                <AiOutlineCloudUpload className="text-7xl mx-auto text-primary text-center" />
                <h2 className="text-lg text-center text-gray-700">
                  Upload PDF
                </h2>
                <p className="text-sm text-center text-gray-500">
                  start conversation with pdf.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomePDF;
