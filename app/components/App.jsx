import React from 'react';
import uuid from 'uuid';

import Notes from './Notes';
import { data } from '../data';

export default class App extends React.Component{
  state = { notes: data };

  render() {
    return (
      <div>
        <button className='add-note' onClick={this.addNote}>Add new note</button>
        <Notes
          notes={ this.state.notes }
          onDelete={this.deleteNote}
          onNoteClick={this.onNoteClick}
          onEdit={this.onEdit}
        />
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

  deleteNote = (id, e) => {
    e.stopPropagation();
    this.setState({
      notes: this.state.notes.filter(note => note.id != id),
    });
  }

  onNoteClick = (id, e) => {
    this.setState({
      notes: this.state.notes.map((note) => {
        if(note.id === id) {
          note.editing = true;
        }
        return note;
      })
    })
  }

  onEdit = (id, task) => {
    this.setState({
      notes: this.state.notes.map((note) => {
        if(note.id === id) {
          note.editing = false;
          note.task = task;
        }
        return note;
      })
    })
  }
}
