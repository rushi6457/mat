import React, { useContext } from 'react';
import styles from '../Styles/Footer.module.css';

const Footer = () => {

    return (
        <footer className={styles.container}>
            <h2>WEATHERAPP</h2>
            <ul>
                <li>Home</li>
                <li>
                    <a href="">
                        Contact us
                    </a>
                </li>
                <li >Cities</li>
                <li>FAQs</li>
                <li >News</li>
            </ul>
        </footer>
    );
};

export default Footer;