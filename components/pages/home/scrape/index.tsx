"use client";
import { Section } from "@/components/common";
import { Button, Card } from "flowbite-react";
import React from "react";
import Lottie from "react-lottie";
import dashboardAnimation from "./dashboard.json";

const HomeScrape = () => {
  return (
    <>
      <Section className="relative !py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-40 items-center">
          <div>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: dashboardAnimation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              isClickToPauseDisabled={true}
              width={"100%"}
              style={{
                margin: "0 !important",
              }}
            />
          </div>
          <div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              Scrape data from url by{" "}
              <span className="text-secondary">key </span>word.
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
              Get Demo.
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomeScrape;
