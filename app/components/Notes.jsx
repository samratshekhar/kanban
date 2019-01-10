import React from 'react';

import Note from './Note';

export default ({ notes, onDelete = () => {} }) => (
  <ul>
    {
      notes.map(item => (
        <li key={item.id}>
          <Note
            task={item.task}
            onDelete={onDelete.bind(null, item.id)}
          />
        </li>
      ))
    }
  </ul>
)
