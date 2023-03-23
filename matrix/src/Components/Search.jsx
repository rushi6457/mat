import React, { useState } from 'react';
import styles from "../Styles/Search.module.css";
import {IoSearchOutline} from "react-icons/io5"
import axios from 'axios';
import Cards from './Cards';

let Degree = ({temp}) =>{

    return (
        <p className={styles.degree} >{temp-273}<sup style={{fontSize:'2rem',fontWeight:'200'}}>o</sup> </p>
    )
}

const Search = () => {
    const [input,setInput] = useState('');
    const [queue, setQueue] = useState(['Delhi', 'Chennai', 'Jaipur']);

    const handleSubmit = (e) =>{
        e.target.value = '';
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=f9e3ee87c2765b677ab21d53d1138a56`)
        .then((res) =>{
            queue.pop()
            let newCity = [...queue]
            newCity.unshift(input)
            setQueue(newCity)
        })
    }
    
    return (
    <div>
        <h1 style={{padding:'40px'}}>Cities</h1>
        <div className={styles.cards} >
            <Cards city={queue[0]}/>
            <Cards city={queue[1]}/>
            <Cards city={queue[2]}/>
        </div>
        <div className={styles.search}>
            <input 
                type="text" 
                onChange={(e) =>setInput(e.target.value)}
                onKeyPress={(e)=>{
                   if(e.key === "Enter"){
                    handleSubmit(e)
                   } 
                }}
                placeholder='Search city' />
            <p><IoSearchOutline/></p>
        </div>
    </div>
    );
}

export default Search;
