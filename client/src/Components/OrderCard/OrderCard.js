import React , {useState} from 'react';
import './card.styles.css';

export const OrderCard = props =>{
   
    return(
    <div className = 'card-container' >
       
   
        <img alt="Monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
        <h2> {props.monster.name} </h2>
      

    </div>
    );
}

