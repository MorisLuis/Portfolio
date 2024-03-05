import React from 'react';
import styles from "../../styles/Navigation.module.scss";
import Link from 'next/link';
import Image from 'next/image';

export const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.menuContent}>
                <Link href={"/"} className={styles.link}>
                    Home
                </Link>
                <Link href={"/contact"} className={styles.link}>
                    Contact
                </Link>
                <div className={styles.projects}>
                    <p className={styles.link}>Projects</p>
                    <div className={styles.images}>
                        <Link href={"/project/sicre_ctm"}>
                            <Image
                                src={'/image3.png'}
                                alt='Project'
                                width={200}
                                height={200}
                            />
                            <p>Sicre CTM</p>
                        </Link>
                        <Link href={"/project/olei_online"}>
                            <Image
                                src={'/image3.png'}
                                alt='Project'
                                width={200}
                                height={200}
                            />
                            <p>Olei Online</p>
                        </Link>
                        <Link href={"/project/olei_app"}>
                            <Image
                                src={'/image3.png'}
                                alt='Project'
                                width={200}
                                height={200}
                            />
                            <p>Olei App</p>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
