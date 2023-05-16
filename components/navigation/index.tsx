"use client";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import LanSelector from "./LanSelector";
import { useStateContext } from "@/context";
import { menu } from "@/string";

const Navigation = () => {
  // context
  const { selectedLan } = useStateContext();

  return (
    <Navbar
      fluid={false}
      rounded={true}
      className="relative z-30 !bg-transparent"
    >
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="/assets/images/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          MDEVI
        </span>
      </Navbar.Brand>
      <div className="flex gap-8 md:order-2 items-center">
        <LanSelector />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          {menu.home[selectedLan.tag]}
        </Navbar.Link>
        <Navbar.Link href="/about">{menu.about[selectedLan.tag]}</Navbar.Link>
        <Navbar.Link href="/services">
          {menu.services[selectedLan.tag]}
        </Navbar.Link>
        <Navbar.Link href="/pricing">
          {menu.pricing[selectedLan.tag]}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
