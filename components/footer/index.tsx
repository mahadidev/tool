"use client";
import React from "react";
import { Footer as FooterFLB } from "flowbite-react";

const Footer = () => {
  return (
    <>
      <FooterFLB container={true}>
        <FooterFLB.Copyright href="#" by="Flowbite™" year={2022} />
        <FooterFLB.LinkGroup>
          <FooterFLB.Link href="#">About</FooterFLB.Link>
          <FooterFLB.Link href="#">Privacy Policy</FooterFLB.Link>
          <FooterFLB.Link href="#">Licensing</FooterFLB.Link>
          <FooterFLB.Link href="#">Contact</FooterFLB.Link>
        </FooterFLB.LinkGroup>
      </FooterFLB>
    </>
  );
};

export default Footer;
