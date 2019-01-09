import React from 'react';

export default ({ notes }) => (
  <ul>
    {
      notes.map(item => (
        <li key={item.id}>
          {item.task}
        </li>
      ))
    }
  </ul>
)
