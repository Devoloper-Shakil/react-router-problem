import React from 'react';
import { Button,Card, NavLink } from 'react-bootstrap';
import { Link} from 'react-router-dom';

const Countrys = (props) => {
    const {name,flag,capital}=props.country;
    return (
        
        <div>
            <Card style={{ width: '18rem',float: 'left', marginLeft:'100px',marginTop:'20px'}}>
                    <Card.Img variant="top" src={flag} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text> 
                        {capital}
                    
                    
                    </Card.Text>
                        

                <Link to={`/name/${name}`}> <Button variant="primary"> More Ditels</Button>  </Link>   

                        
                    </Card.Body>
            
                </Card>
                
        </div>
            
    );
};

export default Countrys;