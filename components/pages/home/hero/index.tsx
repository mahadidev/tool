"use client";
import React, { useState } from "react";
import { Section } from "@/components/common";
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
        <div className="bg-white">
          <div className="relative isolate py-20 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
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
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
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
