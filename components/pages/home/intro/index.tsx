"use client";
import { Section } from "@/components/common";
import { Card } from "flowbite-react";
import React from "react";

const HomeIntro = () => {
  return (
    <Section className="bg-white">
      <div className="grid grid-cols-4 gap-4">
        <Card className="!shadow-box">
          <h1>Hello Chat GPT</h1>
        </Card>
      </div>
    </Section>
  );
};

export default HomeIntro;
