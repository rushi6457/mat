import React, { useContext } from 'react';
import { ScrollContext } from '../Context/ScrollContext';
import Search from './Search';

const Cities = () => {
    const {cityRef} = useContext(ScrollContext)
    return (
        <div
          id='cities'
        >
          <Search/>   
        </div>
    );
}

export default Cities;
