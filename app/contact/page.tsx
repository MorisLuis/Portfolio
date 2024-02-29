import React from 'react';
import styles from "../../styles/Contact.module.scss";

const Contact = ({ params }: { params: { id: string } }) => {

    return (
        <div className={styles.Contact}>

            <div className={styles.header}>
                <p className={styles.message}>If you need a software team...</p>
                <p className={styles.messageAction}>Lets talk!</p>
            </div>

            <div className={styles.button}>
                <button className='button tertiary'>Send Email</button>
            </div>

        </div>
    )
}

export default Contact;
