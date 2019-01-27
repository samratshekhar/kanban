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
}