import React, { useContext } from 'react';
import styles from "../Styles/Navbar.module.css";
import { ScrollContext } from '../Context/ScrollContext';
import {Link } from "react-scroll";

const Navbar = () => {
    const {handleScroll} = useContext(ScrollContext)
    console.log(handleScroll);
    return (
        <nav  className={styles.header} >
            <ul>
                {/* <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}> */}
                    <li onClick={()=>handleScroll("home")}>Home</li>
                {/* </Link>     */}

                 {/* <Link activeClass="active" to="cities" spy={true} smooth={true} offset={50} duration={500}> */}
                    <li onClick={()=>handleScroll("cities")}>Cities</li>
                 {/* </Link>   */}
                     
                 {/* <Link activeClass="active" to="news" spy={true} smooth={true} offset={50} duration={500}> */}
                    <li onClick={()=>handleScroll("news")}>News</li>
                 {/* </Link>    */}
            </ul>     
        </nav>
    );
}

export default Navbar;
