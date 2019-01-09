import React from 'react';
import uuid from 'uuid';

import Notes from './Notes';
import { data } from '../data';

export default class App extends React.Component{
  state = { notes: data };

  render() {
    return (
      <div>
        <button onClick={this.addNote}>Add new note</button>
        <Notes notes={ this.state.notes } />
      </div>
    );
  }

  addNote = () => {
    this.setState({
      notes: this.state.notes.concat({
        id: uuid.v4(),
        task: 'New task',
      }),
    });
  }
}
