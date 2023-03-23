import React, { useContext, useEffect, useState } from 'react';
import styles from "../Styles/Home.module.css"
import bg from "../assets/bg.jpg"
import Navbar from './Navbar';
import { ScrollContext } from '../Context/ScrollContext';
import axios from "axios";
import Details from './Details';
import CityDetails from './CityDetails';

const Home = () => {
    const ref = useContext(ScrollContext)
    const[data,setData] = useState([])
    const [error,setError] = useState('')
    useEffect(()=>{
            navigator.geolocation.getCurrentPosition((position)=>{
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=f9e3ee87c2765b677ab21d53d1138a56`)
                .then((res) =>setData(res.data))
                .catch((err)=>setError(err))
            })
       
    },[])
    return (
        <div className={styles.home}
        id='home'    
        >
        <Navbar/>

           <Details data={data}/>  
           <CityDetails data={data}/>
        </div>
    );
}

export default Home;
