import React from 'react';
import styles from "../styles/Pricing.module.scss"
import globalStyles from "../styles/Global.module.scss"
import Image from "next/image";
import yogaPillowImg from "../public/images/yoga-women.jpg"
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";

import {Lobster} from '@next/font/google'
import lotusImg from "../public/images/icons/lotus.svg";

const lobster = Lobster({
    weight: "400",
    subsets: ['latin']
})

const Pricing = () => {
    const {t} = useTranslation()

    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.infoWrapper}>
                <Image src={lotusImg} width={30} height={30} alt="lotus yoga"/>
                <h4 className={globalStyles.redH4}>
                    {t("pricing.titleRed")}
                </h4>
                <h2 className={globalStyles.globalH2} style={{marginTop: 10}}>
                    {t("pricing.title")}
                </h2>
                <p className={`${styles.pricingP} ${globalStyles.marginBottom}`}>
                    {t("pricing.text")}
                </p>
                <div>
                    <p className={styles.pricingP}>
                        {t("pricing.groupPlan")}
                    </p>
                    <ul className={`${styles.links} ${globalStyles.marginBottom}`}>
                        <li>
                            45€ {t("pricing.perMonth")}
                        </li>
                        <li>
                            3 {t("pricing.perWeek")}
                        </li>
                    </ul>
                    <p className={styles.pricingP}>
                        {t("pricing.privatePlan")}
                    </p>
                    <ul className={`${styles.links} ${globalStyles.marginBottom}`}>
                        <li>
                            30€ {t("pricing.perSession")}
                        </li>
                    </ul>
                </div>
                <h4 className={styles.freeSession}>
                    {t("pricing.firstSession")}
                </h4>
                <a href="tel:+382 (0)68 881 404">
                    <motion.button
                        whileTap={{scale: .95}}
                        className={`${styles.pricingButton} ${lobster.className}`}>
                        {t("pricing.button")}
                    </motion.button>
                </a>
            </div>
            <div className={styles.imageWrapper}>
                <Image
                    src={yogaPillowImg}
                    quality={100}
                    style={{objectFit: "cover"}}
                    alt="Yoga Pillow"
                    fill/>
            </div>
        </section>
    );
};

export default Pricing;