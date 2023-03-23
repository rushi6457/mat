import React, { useEffect, useState } from 'react';
import styles from "../Styles/Home.module.css"

let Degree = ({temp}) =>{

    return (
        <p className={styles.degree} >{temp-273}<sup style={{fontSize:'2rem',fontWeight:'200'}}>o</sup> </p>
    )
}
const GetDay = ({day}) =>{
     const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        const date = new Date(day);
        const day1 = date.getDay();
       
        return days[day1+2]
}
const CityDetails = ({data}) => {
    let [time,setTime] = useState('')
    const [d,setD] = useState('')
    let date = new Date()
   
    useEffect(()=>{
        setTime(date.toTimeString().split(" ")[0])
        setD(date.toDateString())
    },[])
    
    return (
        <div className={styles.citydeatils}>
            <Degree temp ={Math.floor(data?.main?.temp)}/>
            <div className={styles.dateDay}>
                <p>{data.name}</p>
                <div className={styles.timeDateSpan}>
                    <p>{time}</p>
                    <p>{d}</p>
                </div>
             </div>
        </div>
    );
}

export default CityDetails;
