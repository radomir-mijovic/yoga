import React from 'react';
import styles from "../styles/Services.module.scss"
import {useTranslation} from "react-i18next";
import groupYogaImg from "../public/images/group-yoga.jpg"
import meditationImg from "../public/images/meditation-yoga.jpg"
import concentrationImg from "../public/images/concentration.jpg"
import Image from "next/image";

const Services = () => {
    const {t} = useTranslation()

    const services = [
        {
            id: 1,
            title: t("services.imgTitle"),
            img: groupYogaImg,
            daysTime: t("services.daysTime"),
        },
        {
            id: 2,
            title: t("services.imgTitle2"),
            img: meditationImg,
            daysTime: t("services.daysTime"),
        },
        {
            id: 3,
            title: t("services.imgTitle3"),
            img: concentrationImg,
            daysTime: t("services.daysTime"),
        },
    ]

    return (
        <section className={styles.section}>
            <div className={styles.infoWrapper}>
                <h4>
                    {t("services.paragraph")}
                </h4>
                <h2>
                    {t("services.title")}
                </h2>
            </div>
            <div className={styles.wrapper}>
                {services.map(item => {
                    return (
                        <div className={styles.boxWrapper} key={item.id}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={item.img}
                                    style={{objectFit: "cover"}}
                                    quality={100}
                                    fill
                                    alt={item.title}/>
                            </div>
                            <h2 className={styles.sectionH2}>
                                {item.title}
                            </h2>
                            <h4 className={styles.sectionH4}>
                                {item.daysTime}
                            </h4>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Services;