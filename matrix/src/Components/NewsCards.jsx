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
            <img width={'100%'} height={'300px'} style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}} src={fewclouds}/>
        )
    }
    else if(tem ==="scattered clouds"){
        return(
            <img width={'90%'} height={'300px'} style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}} src={scclouds}/>
        )
    }
    else{
        return(
            <img width={'100%'} height={'300px'} style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}} src={summer}/>
        )
    }
}

const NewsCards = ({city}) => {
    const [desc,setDesc] = useState('')
    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=f9e3ee87c2765b677ab21d53d1138a56`)
        .then((res) =>setDesc(res.data.list))
    },[])

    console.log(desc[0]);
    return (
        <div >
            <div>
            <Images tem={desc[0]?.weather[0]?.description} />
            <p className={styles.descText}>{`${desc[0]?.weather[0]?.description} in ${city}`}</p>
            </div>
        </div>
    );
}

export default NewsCards;
