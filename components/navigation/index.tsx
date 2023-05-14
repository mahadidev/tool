'use client';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import LanSelector from './LanSelector';

const Navigation = () => {
	return (
		<Navbar
			fluid={false}
			rounded={true}
			className="w-full fixed top-0 left-0 z-40 !bg-transparent"
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
			<div className="flex gap-8 md:order-2">
				<LanSelector />
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<Navbar.Link href="/navbars" active={true}>
					Home
				</Navbar.Link>
				<Navbar.Link href="/navbars">About</Navbar.Link>
				<Navbar.Link href="/navbars">Services</Navbar.Link>
				<Navbar.Link href="/navbars">Pricing</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
