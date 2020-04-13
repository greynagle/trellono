import React from 'react'
import './List.css'
import Card from './Card'

export default function List(props) {
    const listArr = props.lists.map(val => {
        return(
            <section key={val.id} className="List">
                <header className="List-header">
                    <h2>{val.header}</h2>
                </header>
                <div className="List-cards">
                    <Card listId={val.id} cards={val.cardIds} master={props.master} onDelete={props.onDelete} />
                    <button type="button" className="List-add-button" onClick={() => props.onRandom(val.id)}>
                        + Add Random Card
                    </button>
                </div>
            </section>
        )
    })
    return(
        <div className='App-list'>
            {listArr}
        </div>
    )

}