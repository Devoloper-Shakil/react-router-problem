import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const CountryInfo = () => {
    const {name}=useParams();
    const [infro,setInfro]=useState([]);
    
    
    useEffect(()=>{
        const url =`https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setInfro(data));
    },[]);

    const{flag,capital}=infro;

    return (
        <div>
             <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={flag} />
                    <Card.Body>
                        <Card.Title>name:{name}</Card.Title>
                        <Card.Text> 
                        {capital}
                    
                    
                    </Card.Text>
         
                    </Card.Body>
            
                </Card>
        </div>
    );
};

export default CountryInfo;