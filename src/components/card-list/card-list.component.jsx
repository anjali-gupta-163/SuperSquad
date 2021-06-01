import React from 'react';
import {Card} from '../card/card.component'
import './card-list.styles.css';

export const CardList = (props) => {
     
    return(
    <div className='card-list'>
        { props.page1 && props.page1.map(page1 => (
            <Card page1={page1}/>
          ))}
    </div>
    )
}