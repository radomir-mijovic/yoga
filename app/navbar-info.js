"use client";
import "../i18n";
import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { NavbarInfoStyles, StyledH4 } from "../styles/NavbarInfoStyles";
import {motion} from "framer-motion";
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
  const [isActive, setActive] = useState(1)
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const languageHandler = (item) => {
    changeLanguage(item.lang)
    setActive(item.id)
  }

  return (
    <NavbarInfoStyles>
      <motion.a whileTap={{scale: .97}} href="tel:+382 (0)68 881 404">
      <div className="phone-info">
        <AiOutlinePhone size={19} style={{ marginRight: 7 }} />
        <h4>{t("navbar.call")} +382 (0)68 881 404</h4>
      </div>
      </motion.a>
      <div className="stay-connected">
        <StyledH4>{t("navbar.stayConnected")}:</StyledH4>
        <AiOutlineInstagram size={19} />
        <AiOutlineFacebook size={19} />
      </div>
      <div className="languages">
        {languages.map((item) => {
          return (
            <StyledH4
                whileTap={{scale: .97}}
                style={{color: isActive === item.id ? "#F66E72" : undefined}}
                onClick={() => languageHandler(item)}
                key={item.id}>
              {item.lang.toUpperCase()}
            </StyledH4>
          );
        })}
      </div>
    </NavbarInfoStyles>
  );
};

export default NavbarInfo;
