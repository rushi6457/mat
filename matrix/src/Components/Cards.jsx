import axios from 'axios';
import React, { useEffect, useState } from 'react';
import summer from "../assets/summer.png";
import cloudy from "../assets/cloudy.png";
import thunder from "../assets/thunder.png";
import styles from "../Styles/Search.module.css";

let Degree = ({temp}) =>{

    return (
        <p style={{fontSize:'3rem',fontWeight:'bolder'}}>{Math.floor(temp-273)}<sup style={{fontSize:'1.4rem',fontWeight:'bolder'}}>o</sup> </p>
    )
}

let Images = ({tem}) =>{
    if(tem <10){
        return(
            <img width={'100%'} height={'300px'} style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}} src={summer}/>
        )
    }
    else if(tem >10 && tem <40){
        return(
            <img width={'100%'} height={'300px'} style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}} src={cloudy}/>
        )
    }
    else{
        return(
            <img width={'100%'} height={'300px'} style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}} src={thunder}/>
        )
    }
}
const Cards = ({city}) => {
    const year = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const [data,setData] = useState([])
    let [time,setTime] = useState('')
    const [d,setD] = useState('')
    let date = new Date()
    console.log(d);
    useEffect(()=>{
        setTime(date.toTimeString().split(" ")[0])
        setD(date.toDateString().split("Thu")[1])
    },[])

    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f9e3ee87c2765b677ab21d53d1138a56`)
        .then((res) =>setData(res.data))
    },[city])

    console.log(data);
    return (
        <div style={{boxShadow:'rgb(38, 57, 77) 0px 20px 30px -10px',width:'40%',}}>
            <Images tem={data?.clouds?.all}/>
            {/* <p style={{position:'relative',top:'-70px',fontSize:'2rem',fontWeight:'bold',color:'white',textAlign:'justify',paddingLeft:'20px'}}>{data?.weather[0]?.description}</p> */}
            <div className={styles.tempdata}>
                <div>
                    <p>{data?.name}</p>
                    <h5>{d}</h5>
                </div>
                <Degree temp={data?.main?.temp}/>
            </div>
            
        </div>
    );
}

export default Cards;
