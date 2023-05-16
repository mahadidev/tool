"use client";
import { Section } from "@/components/common";
import { Button, Card, TextInput } from "flowbite-react";
import Image from "next/image";
import React, { useState } from "react";

const HomeDalle = () => {
  const [dalleItems, setDalleItems] = useState<
    {
      id: number;
      image: string;
      title: string;
      tags: string[];
    }[]
  >([
    {
      id: 1,
      image:
        "https://cdn.openai.com/labs/images/A%203D%20render%20of%20an%20astronaut%20walking%20in%20a%20green%20desert.webp?v=1",
      title: "A 3D render of an astronaut walking in a green desert",
      tags: ["Branding", "Website", "App"],
    },
    {
      id: 2,
      image:
        "https://cdn.openai.com/labs/images/A%20synthwave%20style%20sunset%20above%20the%20reflecting%20water%20of%20the%20sea,%20digital%20art.webp?v=1",
      title:
        "A synthwave style sunset above the reflecting water of the sea, digital art",
      tags: ["Logo", "Website", "Mobile"],
    },
    {
      id: 3,
      image:
        "https://cdn.openai.com/labs/images/A%20photo%20of%20a%20teddy%20bear%20on%20a%20skateboard%20in%20Times%20Square.webp?v=1",
      title: "A photo of a teddy bear on a skateboard in Times Square",
      tags: ["Website", "UI/UX"],
    },
    {
      id: 4,
      image:
        "https://cdn.openai.com/labs/images/A%20centered%20explosion%20of%20colorful%20powder%20on%20a%20black%20background.webp?v=1",
      title: "A centered explosion of colorful powder on a black background",
      tags: ["Branding", "Website", "Mobile"],
    },
    {
      id: 5,
      image:
        "https://cdn.openai.com/labs/images/A%203D%20render%20of%20a%20rainbow%20colored%20hot%20air%20balloon%20flying%20above%20a%20reflective%20lake.webp?v=1",
      title:
        "A 3D render of a rainbow colored hot air balloon flying above a reflective lake",
      tags: ["Design", "Development"],
    },
    {
      id: 6,
      image:
        "https://cdn.openai.com/labs/images/A%20Formula%201%20car%20driving%20on%20a%20neon%20road.webp?v=1",
      title: "A Formula 1 car driving on a neon road, art, illustrations",
      tags: ["Logo", "Webapp", "Mobile"],
    },
    {
      id: 7,
      image:
        "https://cdn.openai.com/labs/images/3D%20render%20of%20a%20cute%20tropical%20fish%20in%20an%20aquarium%20on%20a%20dark%20blue%20background,%20digital%20art.webp?v=1",
      title:
        "3D render of a cute tropical fish in an aquarium on a dark blue background",
      tags: ["Branding", "Website", "App"],
    },
    {
      id: 8,
      image:
        "https://cdn.openai.com/labs/images/A%20blue%20orange%20sliced%20in%20half%20laying%20on%20a%20blue%20floor%20in%20front%20of%20a%20blue%20wall.webp?v=1",
      title:
        "A blue orange sliced in half laying on a blue floor in front of a blue wall",
      tags: ["Logo", "Website", "Mobile"],
    },
  ]);

  return (
    <Section className="relative">
      <p className="text-secondary">AI Image Generation</p>
      <h1 className="text-4xl text-gray-600">
        Get image <span className="text-secondary">beyond</span> your
        imagination.
      </h1>
      <div className="relative mt-5">
        <input
          id="email1"
          type="email"
          placeholder="ex. coca cola inside  iceland"
          required={true}
          className="w-full border-0 !shadow-box rounded-md py-4 px-3 text-xl"
        />
        <Button className="absolute top-0 bottom-0 right-2 m-auto block">
          Generate
        </Button>
      </div>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
        {dalleItems?.map(
          (
            item: {
              id: number;
              title: string;
              tags: string[];
              image: string;
            },
            index: number
          ) => (
            <div
              className="shadow-box rounded-lg overflow-hidden bg-white"
              key={index}
            >
              <Image
                className="w-full"
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
              />
              <div className="pt-3 pb-4 px-4">
                <h5 className="text-sm sm:text-base tracking-tight text-gray-700">
                  {item.title.slice(0, 40)} ...
                </h5>
                <div className="flex md:gap-2 flex-col md:flex-row">
                  {item.tags?.map((tag: string, tagIndex: number) => (
                    <p
                      className="text-xs sm:text-sm underline cursor-pointer font-normal text-gray-700"
                      key={tagIndex}
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </Section>
  );
};

export default HomeDalle;
