"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

// Define the types for the navigation links
interface SubLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface NavLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  subLinks?: SubLink[];
}

interface NavItemProps {
  link: NavLink;
}

const NavItem: React.FC<NavItemProps> = ({ link }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        onClick={toggleMenu}
        className="flex cursor-pointer items-center justify-between p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
      >
        <Link href={link.href} passHref>
          <div className="flex font-bold items-center flex-grow cursor-pointer">
            {link.icon}
            {link.label}
          </div>
        </Link>
        {link.subLinks && (
          <button className="focus:outline-none">
            <MdKeyboardArrowDown
              className={`transition-transform font-bold transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>
      {link.subLinks && isOpen && (
        <div className="pl-4">
          {link.subLinks.map((subLink) => (
            <Link key={subLink.label} href={subLink.href} passHref>
              <div className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer">
                {subLink.icon}
                {subLink.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NavItem;
