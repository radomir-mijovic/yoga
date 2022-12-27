import React from 'react';
import styles from '../../styles/Blog.module.scss'
import Image from "next/image";
import yogaImg from "../../public/images/yoga-sketch2.jpg"

const Page = () => {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.h1}>
                Coming soon
            </h1>
            <div className={styles.imageWrapper}>
                <Image src={yogaImg} style={{objectFit: "cover"}} fill alt="Yoga"/>
            </div>
        </div>
    );
};

export default Page;