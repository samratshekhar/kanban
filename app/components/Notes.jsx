import React from 'react';

import Note from './Note';

export default ({ notes, onDelete = () => {} }) => (
  <ul>
    {
      notes.map(item => (
        <li key={item.id}>
          <Note>
            <span>{item.task}</span>
            <button onClick={onDelete.bind(null, item.id)}>x</button>
          </Note>
        </li>
      ))
    }
  </ul>
)




