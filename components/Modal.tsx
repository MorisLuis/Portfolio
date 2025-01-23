import React, { ReactNode } from 'react';
import styles from '../styles/Modals.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

interface ModalInterface {
    visible: boolean;
    handleClose: () => void;
    children: ReactNode;
    transparent: boolean
}

export const Modal = ({
    visible,
    handleClose,
    children,
    transparent = false
}: ModalInterface) => {

    return visible && (
        <>
            <div className={styles.modalBackground} onClick={handleClose}></div>

            <div className={transparent ? `${styles.Modal} ${styles.transparent}` : styles.Modal}>
                <div className={styles.content}>
                    {children}
                    <div className={styles.close} onClick={handleClose}>
                        <FontAwesomeIcon icon={faClose}/>
                    </div>
                </div>
            </div>
        </>
    )
}
