import React from "react"
import './cardlist.component.css'

import { Card } from "../Card/card.component"

export const CardList = (props) =>{
    return (<div className='card-list'>
        {props.monsters.map(monster=>
            <Card key={monster.id} monster={monster}/>)}
        
    </div>)
}


