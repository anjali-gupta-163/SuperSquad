import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    const image = props.page1["poster-image"];
    const images = "images/"+image;
    return(
        <div className='card-container'>
            <img 
            alt="player" 
            src={images}
            width={200} height={200}
             />
            <h2>{props.page1.name}</h2>
        </div>
    );
}