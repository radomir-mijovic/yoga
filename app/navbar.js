"use client";
import "../i18n";
import React from "react";
import Link from "next/link"
import { LinkStyled, NavbarStyled } from "../styles/NavbarStyled";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  const links = [
    {
      id: 1,
      title: t("navbar.yoga"),
      link: "/"
    },
    {
      id: 2,
      title: t("navbar.blog"),
      link: "/blog"
    },
  ];

  return (
    <NavbarStyled>
      {links.map((link) => {
        return (
          <LinkStyled key={link.id}>
            <Link href={link.link}>
              {link.title}
            </Link>
          </LinkStyled>
        );
      })}
    </NavbarStyled>
  );
};

export default Navbar;
