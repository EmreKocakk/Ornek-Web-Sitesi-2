import React, { useEffect, useState } from 'react'
import '../css/Main.css'
import Card from './Card'



function Main({list, removeCard, toggleActive, dark}) {

    


    return (
        <div className='container'>
            {
                list && list.map((card) => (
                    <Card key={card.id} card = {card} removeCard = {removeCard} toggleActive = {toggleActive} dark = {dark} />
                ))
            }

        </div>
    )
}

export default Main