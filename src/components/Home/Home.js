import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Countrys from '../Countrys/Countrys';

const Home = () => {
    const [counrty,setCountry]=useState([]);
    useEffect(()=>{
        const url=`https://restcountries.eu/rest/v2/all`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountry(data))
    },[]);
    return (
        <div>
            
            {
                counrty.map(country=><Countrys country={country}></Countrys>)
            }
        </div>
    );
};

export default Home;