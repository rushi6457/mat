import React, { useContext } from 'react';
import { ScrollContext } from '../Context/ScrollContext';
import NewsCards from './NewsCards';
import styles from "../Styles/News.module.css"
const News = () => {
    const ref = useContext(ScrollContext)
    return (
        <div id='news'>
            <h1 style={{padding:'5%'}}>News</h1>
            <div className={styles.citiesName}>
                <NewsCards city={"Delhi"}/>
                <NewsCards city={"Manipur"}/>
                <NewsCards city={"Mumbai"}/>
            </div>
        </div>
    );
}

export default News;
