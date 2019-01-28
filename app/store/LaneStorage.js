import LaneActions from '../actions/LaneActions';

export default class LaneStorage {
  constructor() {
    this.bindActions(LaneActions);
    this.state = {
      lanes: [],
    };
  }

  create(lane) {
    lane.notes = lane.notes || [];
    this.setState({
      lanes: this.state.lanes.concat(lane)
    });
  }

  update(updatedLane) {
    this.setState({
      lanes: this.state.lanes.map(lane => {
        if (lane.id === updatedLane.id) {
          return Object.assign({}, lane, updatedLane)
        }
        return lane;
      }),
    })
  }

  delete({ id }) {
    this.setState({
      lanes: this.state.lanes.filter(lane => {
        lane.id !== id
      }),
    })
  }

  attachToLane({ laneId, noteId }) {
    this.setState({
      lanes: this.state.lanes.map(lane => {
        if (lane.notes.includes(noteId)) {
          lane.notes = lane.notes.filter(note => note.id !== noteId);
        }

        if (lane.id === laneId) {
          lane.notes = lane.notes.concat(noteId);
        }

        return lane;
      }),
    });
  }

  detachFromLane({ laneId, noteId }) {
    this.setState({
      lanes: this.state.lanes.map(lane => {
        if (lane.id === laneId) {
          lane.notes = lane.notes.filter(note => note.id !== noteId);
        }
        return lane;
      })
    })
  }
}