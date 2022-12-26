import React from 'react';
import styles from "../styles/SmallBanner.module.scss"
import Image from "next/image";
import blackImg1 from "../public/images/black-yoga.jpg"
import blackImg2 from "../public/images/black-yoga2.jpg"
import buddhaSvg from "../public/images/icons/buddha.svg"
import yogaSvg from "../public/images/icons/yoga.svg"
import {useTranslation} from "react-i18next";

const SmallBanner = () => {
    const {t} = useTranslation()

    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.professionalCourses}>
                <Image width={50} height={50} src={yogaSvg} alt="buddha icon"/>
                <h4 className={styles.whiteH4}>
                    {t("pricing.box.yogaTitle")}
                </h4>
                <p className={styles.whiteP}>
                    {t("pricing.box.yogaText")}
                </p>
                <div className={styles.dots}>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
            <div className={styles.imageWrapper}>
                <Image
                    src={blackImg1}
                    fill
                    quality={100}
                    style={{objectFit: "cover"}}
                    alt="Yoga"/>
            </div>
            <div className={styles.meditationCenter}>
                <Image width={50} height={50} src={buddhaSvg} alt="buddha icon"/>
                <h4 className={styles.whiteH4}>
                    {t("pricing.box.meditationTitle")}
                </h4>
                <p className={styles.whiteP}>
                    {t("pricing.box.meditationText")}
                </p>
                <div className={styles.dots}>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
            <div className={styles.imageWrapper}>
                <Image
                    src={blackImg2}
                    fill
                    quality={100}
                    style={{objectFit: "cover"}}
                    alt="Yoga"/>
            </div>
        </section>
    );
};

export default SmallBanner;