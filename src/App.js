import React from 'react';
import './App.css'
import List from './components/List'

function App(props) {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <List lists={props.STORE.lists} master={props.STORE.allCards} />
    </main>
  );
}

export default App;