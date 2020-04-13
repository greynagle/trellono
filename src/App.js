import React from 'react';
import './App.css'
import List from './components/List'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      lists: props.STORE.lists,
      allCards: props.STORE.allCards
    }
  }
  
  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  // handles updating the lists of cardIds and returning
  // the full new lists value for rerender
  newFullLists = (listId, newCardIds) => {
    const newListsVal = {...this.state.lists[listId-1], cardIds: newCardIds}
    let newFullLists = this.state.lists;
    newFullLists[listId-1] = newListsVal;
    return newFullLists
  }
  
  handleRandom = (listId) => {
    const newCard = this.newRandomCard();
    
    // adds the new card to the list's card values
    const newCardIds = [...this.state.lists[listId-1].cardIds, newCard.id]
    const update = this.newFullLists(listId, newCardIds)

    // adds the new card contents to master
    const newMaster = {...this.state.allCards, [newCard.id]:newCard}
    

    this.setState({
      lists: update,
      allCards: newMaster
    })
  }

  handleDelete = (listId, cardId) => {
    const newCardIds = this.state.lists[listId-1].cardIds.filter(id => id !== cardId)
    const update = this.newFullLists(listId, newCardIds)
    this.setState({
      lists: update
    })
  }

  render() {
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <List lists={this.state.lists} master={this.state.allCards} onDelete={this.handleDelete} onRandom={this.handleRandom}/>
      </main>
    );
  }  
}
