import React from "react";

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
    <section className={`w-full py-16 ${className}`}>
      {container && <div className="container">{children}</div>}
      {!container && children}
    </section>
  );
};

export default Section;
