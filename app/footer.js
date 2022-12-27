import React from 'react';
import styles from '../styles/Footer.module.scss'
import globalStyles from '../styles/Global.module.scss'
import lotusImg from "../public/images/icons/lotus.svg"
import Image from "next/image";
import {AiOutlineInstagram, AiOutlineFacebook,} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
    return (
        <section className={styles.footerWrapper}>
            <div className={styles.logoWrapper}>
                <Image src={lotusImg} width={40} height={40} alt="lotus yoga"/>
                <h3 className={styles.h3}>
                    Hatha Yoga
                </h3>
            </div>
            <div className={styles.linksWrapper}>
                <Link href="/">
                    <h5 className={styles.h5}>
                        Home
                    </h5>
                </Link>
                <Link href='/blog'>
                    <h5 className={styles.h5}>
                        Our Blog
                    </h5>
                </Link>
            </div>
            <div className={styles.iconsWrapper}>
                <AiOutlineInstagram size={25} color={"#a2a5a1"}/>
                <AiOutlineFacebook size={25} color={"#a2a5a1"}/>
            </div>
        </section>
    );
};

export default Footer;