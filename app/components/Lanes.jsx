import React from 'react';

import Lane from './Lane';

export default ({ lanes, ...props }) => {
  return (
    <div className='lanes' {...props}>
      {lanes.map(lane => (
        <Lane className='lane' key={lane.id} lane={lane} />
      ))}
    </div>
  );
}