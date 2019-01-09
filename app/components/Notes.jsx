import React from 'react';

import { data } from '../data';

export default class Notes extends React.Component {
  render() {
    return (
      <ul>
        {
          data.map(item => (
            <li key={item.id}>
              {item.task}
            </li>
          ))
        }
      </ul>
    );
  }
}