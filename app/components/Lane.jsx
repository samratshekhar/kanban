import React from 'react';
import uuid from 'uuid';

import connect from '.././lib/connect';
import NoteActions from '../actions/NoteActions';
import Notes from './Notes';

class Lane extends React.Component {
  // ({ lane, ...props}) =>

  render() {
    const { notes } = this.props;
    return (
      <div>
        <div className='lane-header'>
          <button className='add-note' onClick={this.addNote}>+</button>
          <span className='lane-name'>{Lane.name}</span>
        </div>
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

export default connect(
  ({notes}) => ({
    notes
  }), {
    NoteActions
  }
)(Lane)