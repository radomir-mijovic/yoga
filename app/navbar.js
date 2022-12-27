"use client"
import "../i18n";
import React, {useState} from "react";
import styles from "../styles/Navbar.module.scss"
import Link from "next/link"
import {usePathname} from "next/navigation";
import { useTranslation } from "react-i18next";
import lotusImg from "../public/images/icons/lotus.svg";
import Image from "next/image";
import {motion} from "framer-motion";

const Navbar = () => {
  const { t } = useTranslation();
  const path = usePathname()
  const [isActive, setIsActive] = useState(path === "/" ? 1 : 2)

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
    <nav className={styles.navbarWrapper}>
      <Image src={lotusImg} width={35} height={35} alt="lotus yoga"/>
      <div className={styles.linksWrapper}>
        {links.map((link) => {
          return (
              <motion.div
                  whileTap={{scale: .97}}
                  className={`${styles.link} ${isActive === link.id ? styles.active : undefined}`}
                  onClick={() => setIsActive(link.id)}
                  key={link.id}>
                <Link href={link.link}>
                  {link.title}
                </Link>
              </motion.div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
