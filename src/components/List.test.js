import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import STORE from '../store'

it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<List lists={STORE.lists} master={STORE.allCards}/>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});