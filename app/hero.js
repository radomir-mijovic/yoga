import React from "react";
import styles from "../styles/Hero.module.scss";
import Image from "next/image";
import heroYogaImg from "../public/images/hero-yoga.jpg";
import {useTranslation} from "react-i18next";

const Hero = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.heroContainer}>
            <div className={styles.imageWrapper}/>
            <Image
                src={heroYogaImg}
                alt="Hero yoga image"
                quality={100}
                style={{objectFit: "cover"}}
                fill
            />
            <h1 className={styles.heroH1}>
                {t("hero.title")}
            </h1>
            <p className={styles.heroP}>
                {t("hero.paragraph")}
            </p>
        </section>
    );
};

export default Hero;
