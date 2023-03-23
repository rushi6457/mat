import React from 'react';
import styles from "../Styles/Earth.module.css";
import earth from "../assets/earth.png";

const Earth = () => {
    return (
        <div className={styles.earth}>
            <img src={earth} alt="" />
        </div>
    );
}

export default Earth;
