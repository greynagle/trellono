import React from 'react'
import './Card.css'

export default function Card(props) {
    const cardArr = props.cards.map((val, i) => {
        return (
            <div key={i} className="Card">
                <button id={props.listId} type="button" onClick={() => props.onDelete(props.listId, val)}>delete</button>
                <h3>
                    {props.master[val].title}
                </h3>
                <p>
                    {props.master[val].content}
                </p>
          </div>
        )
    })
    
    return (
        <>
            {cardArr}
        </>
    )
}