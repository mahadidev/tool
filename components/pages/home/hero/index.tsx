"use client";
import React, { useState } from "react";
import { Background, Section } from "@/components/common";
import { Avatar, Button } from "flowbite-react";
import Lottie from "react-lottie";
import * as roboAnimation from "./robo.json";
import * as appAnimation from "./app.json";
import { HiUserCircle, HiCloudDownload, HiAdjustments } from "react-icons/hi";

const HomeHero = () => {
  return (
    <>
      <Section
        className="w-full !min-h-max !p-0 relative overflow-hidden"
        container={false}
      >
        <div>
          <div className="relative isolate py-20 lg:px-8">
            <div className="container ">
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 items-center">
                <div className="xl:col-span-2">
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: roboAnimation,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                    height={200}
                    width={200}
                    style={{
                      margin: "0 !important",
                    }}
                  />
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
                    Let's <span className="text-secondary">boost</span> your
                    <br />
                    business with <span className="text-primary">AI</span> Tool
                  </h1>
                  <Avatar.Group className="mt-6 pb-14">
                    <Avatar
                      img="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      rounded={true}
                      stacked={true}
                    />
                    <Avatar
                      img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      rounded={true}
                      stacked={true}
                    />
                    <Avatar
                      img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                      rounded={true}
                      stacked={true}
                    />
                    <Avatar
                      img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                      rounded={true}
                      stacked={true}
                    />
                    <Avatar
                      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      rounded={true}
                      stacked={true}
                    />
                  </Avatar.Group>
                </div>
                <div className="hidden lg:block">
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: appAnimation,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                    height={500}
                    width={500}
                    style={{
                      margin: "0 0 0 auto",
                      maxWidth: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <div className="w-full py-4 bg-primary">
        <div className="container">
          <div className="grid grid-cols-3 items-center">
            <div className="col-span-2">
              <h1 className="text-2xl text-white">
                Get 50% discount by starting right now.
              </h1>
            </div>
            <div className="">
              <Button className="ml-auto" color="gray">
                Sing up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
