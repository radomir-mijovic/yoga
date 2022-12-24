"use client";
import "../i18n";
import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { NavbarInfoStyles, StyledH4 } from "../styles/NavbarInfoStyles";
import {
  AiOutlinePhone,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";

const languages = [
  {
    id: 1,
    lang: "mne",
  },
  {
    id: 2,
    lang: "en",
  },
  {
    id: 3,
    lang: "ru",
  },
];

const NavbarInfo = () => {
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <NavbarInfoStyles>
      <div className="phone-info">
        <AiOutlinePhone size={19} style={{ marginRight: 7 }} />
        <h4>{t("navbar.call")} +382 (0)68 881 404</h4>
      </div>
      <div className="stay-connected">
        <StyledH4>{t("navbar.stayConnected")}:</StyledH4>
        <AiOutlineInstagram size={19} />
        <AiOutlineFacebook size={19} />
      </div>
      <div className="languages">
        {languages.map((item) => {
          return (
            <StyledH4 onClick={() => changeLanguage(item.lang)} key={item.id}>
              {item.lang.toUpperCase()}
            </StyledH4>
          );
        })}
      </div>
    </NavbarInfoStyles>
  );
};

export default NavbarInfo;
