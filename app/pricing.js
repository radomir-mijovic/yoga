import React from 'react';
import styles from "../styles/Pricing.module.scss"
import globalStyles from "../styles/Global.module.scss"
import Image from "next/image";
import yogaPillowImg from "../public/images/yoga-women.jpg"
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";

import {Lobster} from '@next/font/google'

const lobster = Lobster({
    weight: "400",
    subsets: ['latin']
})

const Pricing = () => {
    const {t} = useTranslation()

    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.infoWrapper}>
                <h4 className={globalStyles.redH4}>
                    {t("pricing.titleRed")}
                </h4>
                <h2 className={globalStyles.globalH2}>
                    {t("pricing.title")}
                </h2>
                <p className={styles.pricingP}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>
                    Ad aut beatae commodi consequatur
                    doloribus earum esse <br/> harum illo in ipsam,
                    optio perspiciatis quam temporibus voluptatem?
                </p>
                <div>
                    <p className={styles.pricingP}>
                        Standard Pricing Plan $35Per week
                    </p>
                    <p className={styles.pricingP}>
                        Professional Pricing Plan $120Per week
                    </p>
                    <p className={styles.pricingP}>
                        Private Pricing Plan $250Per week
                    </p>
                </div>
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