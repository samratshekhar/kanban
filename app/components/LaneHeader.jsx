import React from 'react';
import uuid from 'uuid';

import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';

export default class LaneHeader extends React.Component {
  render() {
    const { lane } = this.props;
    return (
      <div className='lane-header'>
        <button className='add-note' onClick={this.addNote}>+</button>
        <span className='lane-name'>{lane.name}</span>
      </div>
    );
  }

  addNote = () => {
    const { lane  } = this.props;
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
}

