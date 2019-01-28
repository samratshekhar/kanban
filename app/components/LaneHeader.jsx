import React from 'react';
import uuid from 'uuid';

import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Editable from './Editable';

export default class LaneHeader extends React.Component {
  render() {
    const { lane } = this.props;
    return (
      <div className='lane-header' onClick={this.activateLaneEdit}>
        <button className='add-note' onClick={this.addNote}>+</button>
        <span className='lane-name'>{}</span>
        <Editable
          className='editable'
          editing={lane.editing}
          value={lane.name}
          onEdit={this.updateLaneName}
        />
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

  activateLaneEdit = () => {
    const { lane } = this.props;
    LaneActions.update({
      id: lane.id,
      editing: true,
    })
  }

  updateLaneName = (updatedName) => {
    const { lane } = this.props;
    LaneActions.update({
      id: lane.id,
      name: updatedName,
      editing: false,
    })
  }
}

