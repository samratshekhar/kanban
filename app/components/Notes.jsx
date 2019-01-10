import React from 'react';

import Note from './Note';

export default ({ notes }) => (
  <ul>
    {
      notes.map(item => (
        <li key={item.id}>
          <Note task={item.task}/>
        </li>
      ))
    }
  </ul>
)
