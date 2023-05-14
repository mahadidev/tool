import React from "react";

const Section = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return <section className={`w-full py-16 ${className}`}>{children}</section>;
};

export default Section;
