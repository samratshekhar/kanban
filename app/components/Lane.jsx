import React from 'react';

import connect from '.././lib/connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Notes from './Notes';
import LaneHeader from './LaneHeader';

class Lane extends React.Component {
  render() {
    const {
      notes,
      lane,
    } = this.props;
    return (
      <div>
        <LaneHeader lane={lane} />
        <Notes
          notes={ this.selectNotesById(notes, lane.notes) }
          onDelete={this.deleteNote}
          onNoteClick={this.onNoteClick}
          onEdit={this.onEdit}
        />
      </div>
    );
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