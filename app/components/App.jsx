import React from 'react';
import uuid from 'uuid';

import Notes from './Notes';
import connect from '../lib/connect';
import NoteActions from '../actions/NoteActions';

class App extends React.Component{
  render() {
    const { notes } = this.props;
    return (
      <div>
        <button className='add-note' onClick={this.addNote}>Add new note</button>
        <Notes
          notes={ notes }
          onDelete={this.deleteNote}
          onNoteClick={this.onNoteClick}
          onEdit={this.onEdit}
        />
      </div>
    );
  }

  addNote = () => {
    this.props.NoteActions.create({
      id: uuid.v4(),
      task: 'New task'
    });
  }

  deleteNote = (id, e) => {
    e.stopPropagation();
    this.props.NoteActions.delete(id);
  }

  onNoteClick = (id, e) => {
    e.stopPropagation();
    this.props.NoteActions.update({id, editing: true});

  }

  onEdit = (id, task) => {
    this.props.NoteActions.update({id, task, editing: false});
  }
}

export default connect(({notes}) => ({
  notes,
}), {
  NoteActions,
})(App);