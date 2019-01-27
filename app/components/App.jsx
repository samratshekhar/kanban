import React from 'react';
import uuid from 'uuid';

import connect from '../lib/connect';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';

class App extends React.Component{
  addLane = () => {
    this.props.LaneActions.create({
      id: uuid.v4(),
      name: 'New lane'
    });
  };

  render() {
    return (
      <div>
        <button className="add-lane" onClick={this.addLane}>+</button>
        <Lanes lanes={this.props.lanes} />
      </div>
    );
  }
}

export default connect(({lanes}) => ({
  lanes,
}), {
  LaneActions,
})(App);