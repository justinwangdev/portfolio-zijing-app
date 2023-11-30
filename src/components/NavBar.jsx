import React from "react";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Research",
    path: "#research",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const NavBar = () => {

  return (
    <nav className="fixed top-0 z-20 left-0 right-0 bg-default-100 bg-opacity-80">
      <div className="py-2">
        <ul className="flex flex-row justify-center  space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
