import React from 'react';
import styles from '../styles/Instagram.module.scss'
import Image from "next/image";
import {instagram_images} from "../objects_data/instagram_images";

const Instagram = () => {
    return (
        <div className={styles.instagramWrapper}>
            <h4 className={styles.instagramH2}>
                @yoga_hatha_budva
            </h4>
            <div className={styles.imagesContainer}>
                {instagram_images.map(image => {
                    return (
                        <div key={image.id} className={styles.imageWrapper}>
                            <Image
                                src={image.src}
                                fill
                                style={{objectFit: "cover", borderRadius: 5}}
                                alt="Instagram pic"/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Instagram;