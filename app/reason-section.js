import React from 'react';
import styles from "../styles/Reason.module.scss"
import globalStyles from "../styles/Global.module.scss"
import {useTranslation} from "react-i18next";

const ReasonSection = () => {
    const {t} = useTranslation()

    return (
        <section className={styles.reasonWrapper}>
            <div>
                <h4 className={globalStyles.redH4} style={{textAlign: 'center'}}>
                    {t("pricing.titleRed")}
                </h4>
                <h2 className={styles.h2}>
                    {t("reason.title")}
                </h2>
                <div className={styles.textWrapper}>
                    <h4 className={styles.h4}>
                        {t("reason.data.title1")}
                    </h4>
                    <p className={styles.p}>
                        {t("reason.data.text1")}
                    </p>
                </div>
                <div className={styles.textWrapper}>
                    <h4 className={styles.h4}>
                        {t("reason.data.title2")}
                    </h4>
                    <p className={styles.p}>
                        {t("reason.data.text2")}
                    </p>
                </div>
                <div className={styles.textWrapper}>
                    <h4 className={styles.h4}>
                        {t("reason.data.title3")}
                    </h4>
                    <p className={styles.p}>
                        {t("reason.data.text3")}
                    </p>
                </div>
                <div className={styles.textWrapper}>
                    <h4 className={styles.h4}>
                        {t("reason.data.title4")}
                    </h4>
                    <p className={styles.p}>
                        {t("reason.data.text4")}
                    </p>
                </div>
                <div className={styles.textWrapper}>
                    <h4 className={styles.h4}>
                        {t("reason.data.title5")}
                    </h4>
                    <p className={styles.p}>
                        {t("reason.data.text5")}
                    </p>
                </div>
                <div className={styles.textWrapper}>
                    <h4 className={styles.h4}>
                        {t("reason.data.title6")}
                    </h4>
                    <p className={styles.p}>
                        {t("reason.data.text6")}
                    </p>
                </div>
                <div className={styles.textWrapper}>
                    <h4 className={styles.h4}>
                        {t("reason.data.title7")}
                    </h4>
                    <p className={styles.p}>
                        {t("reason.data.text7")}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ReasonSection;