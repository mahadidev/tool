"use client";
import React from "react";
import { Background } from "../index";

const Section = ({
  children,
  className,
  container = true,
}: {
  children: any;
  className?: string;
  container?: boolean;
}) => {
  return (
    <section className={`w-full py-12 sm:py-22 lg:py-28 ${className}`}>
      {container && <div className="container">{children}</div>}
      {!container && children}
    </section>
  );
};

export default Section;
