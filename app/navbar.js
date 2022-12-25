"use client";
import "../i18n";
import React from "react";
import { LinkStyled, NavbarStyled } from "../styles/NavbarStyled";
import { useTranslation } from "react-i18next";
import lotusImg from "../public/images/lotus.png"
import blogImg from "../public/images/blog-svgrepo-com.svg"

const Navbar = () => {
  const { t } = useTranslation();

  const links = [
    {
      id: 1,
      title: t("navbar.yoga"),
      icon: lotusImg,
    },
    {
      id: 2,
      title: t("navbar.blog"),
      icon: blogImg,
    },
  ];

  return (
    <NavbarStyled>
      {links.map((link) => {
        return (
          <LinkStyled key={link.id}>
            {link.title}
          </LinkStyled>
        );
      })}
    </NavbarStyled>
  );
};

export default Navbar;
