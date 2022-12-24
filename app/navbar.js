"use client";
import "../i18n";
import React from "react";
import { LinkStyled, NavbarStyled } from "../styles/NavbarStyled";
import { useTranslation } from "react-i18next";
import { GrYoga, GrBlog } from "react-icons/gr";

const links = [
  {
    id: 1,
    title: "Hatha Yoga",
    icon: <GrYoga size={25} color={"#A2A5A1"} />,
  },
  {
    id: 2,
    title: "Blog",
    icon: <GrBlog size={25} color={"#A2A5A1"} />,
  },
];

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <NavbarStyled>
      {links.map((link) => {
        return (
          <LinkStyled key={link.id}>
            <div style={{ marginRight: 12 }}>{link.icon}</div>
            {link.title}
          </LinkStyled>
        );
      })}
    </NavbarStyled>
  );
};

export default Navbar;
