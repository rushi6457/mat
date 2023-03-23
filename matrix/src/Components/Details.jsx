import React from 'react';
import styles from "../Styles/Home.module.css"
const Details = ({data}) => {
    return (
        <div className={styles.box}>
            <h5>Weather Details</h5>
            <div><p>Cloudy</p><p>{`${data?.clouds?.all}%`}</p></div>    
            <div><p>Humidity</p><p>{`${data?.main?.humidity}%`}</p></div>    
            <div><p>Wind</p><p>{`${data?.wind?.speed}km/hr`}</p></div>  
        </div>
    );
}

export default Details;
