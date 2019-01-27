import React from 'react';

export default ({ lane, ...props}) => {
  return (<div {...props}>{lane.name}</div>)
}