import React from 'react';
import uuid from 'uuid';

import connect from '.././lib/connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Notes from './Notes';

class Lane extends React.Component {
  // ({ lane, ...props}) =>

  render() {
    const {
      notes,
      lane,
    } = this.props;
    return (
      <div>
        <div className='lane-header'>
          <button className='add-note' onClick={this.addNote}>+</button>
          <span className='lane-name'>{Lane.name}</span>
        </div>
          <Notes
            notes={ this.selectNotesById(notes, lane.notes) }
            onDelete={this.deleteNote}
            onNoteClick={this.onNoteClick}
            onEdit={this.onEdit}
          />
      </div>
    );
  }

  addNote = () => {
    const {
      NoteActions,
      LaneActions,
      lane,
    } = this.props;
    const noteId = uuid.v4();
    NoteActions.create({
      id: noteId,
      task: 'New task'
    });
    LaneActions.attachToLane({
      laneId: lane.id,
      noteId
    });
  }

  deleteNote = (id, e) => {
    const {
      NoteActions,
      LaneActions,
      lane,
    } = this.props;
    e.stopPropagation();
    LaneActions.detachFromLane({
      laneId: lane.id,
      noteId: id,
    });
    NoteActions.delete(id);
  }

  onNoteClick = (id, e) => {
    e.stopPropagation();
    this.props.NoteActions.update({id, editing: true});

  }

  onEdit = (id, task) => {
    this.props.NoteActions.update({id, task, editing: false});
  }

  selectNotesById(allNotes, noteIds = []) {
    return allNotes.filter(note => noteIds.includes(note.id))
  }
}

export default connect(
  ({notes}) => ({
    notes
  }), {
    NoteActions,
    LaneActions,
  }
)(Lane)