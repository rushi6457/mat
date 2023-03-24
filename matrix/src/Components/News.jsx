import React, { useContext } from 'react';
import { ScrollContext } from '../Context/ScrollContext';
import NewsCards from './NewsCards';
import styles from "../Styles/News.module.css"
import FadeUp from './Fadeup';
import useFadeUp from '../hooks/useFadeUp';
const News = () => {
    const {newsRef} = useContext(ScrollContext)
    return (
    // <FadeUp>
        <div ref={newsRef}>
            <h1 style={{padding:'5%'}}>News</h1>
            <div className={styles.citiesName}>
                <NewsCards city={"Delhi"}/>
                <NewsCards city={"Manipur"}/>
                <NewsCards city={"Mumbai"}/>
            </div>
        </div>
   /* </FadeUp> */  
    );
}

export default News;
