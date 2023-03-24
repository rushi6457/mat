import axios from 'axios';
import React, { useEffect, useState } from 'react';
import summer from "../assets/summer.png";
import cloudy from "../assets/cloudy.png";
import thunder from "../assets/thunder.png";
import fewclouds from "../assets/fewclouds.png";
import scclouds from "../assets/scclouds.png";
import styles from "../Styles/News.module.css"

let Images = ({tem}) =>{
    if(tem ==="few clouds"){
        return(
            <img width={'200px'} height={'300px'} style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}} src={fewclouds}/>
        )
    }
    else if(tem ==="scattered clouds"){
        return(
            <img width={'200px'} height={'300px'} style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}} src={scclouds}/>
        )
    }
    else{
        return(
            <img width={'200px'} height={'300px'} style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}} src={summer}/>
        )
    }
}

const NewsCards = ({city}) => {
    const [desc,setDesc] = useState('')
    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=f9e3ee87c2765b677ab21d53d1138a56`)
        .then((res) =>setDesc(res.data.list))
    },[])

    return (
        <div className={styles.container}>
            <div >
            <Images tem={desc[0]?.weather[0]?.description} />
            <p className={styles.descText}>{`${desc[0]?.weather[0]?.description} in ${city}`}</p>
            {/* <div className={styles.overlay}>
                <p className={styles.text}>Read More</p>
            </div> */}
            </div>
        </div>
    );
}

export default NewsCards;
