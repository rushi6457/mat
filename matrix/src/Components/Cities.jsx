import React, { useContext } from 'react';
import { ScrollContext } from '../Context/ScrollContext';
import Search from './Search';
import useFadeUp from '../hooks/useFadeUp';

const Cities = () => {
    const {cityRef} = useContext(ScrollContext)
    return (
        <div
          // id='cities'
          ref={cityRef}
        >
          <Search/>   
        </div>
    );
}

export default Cities;
