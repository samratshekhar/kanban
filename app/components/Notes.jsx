import React from 'react';

import Note from './Note';
import Editable from './Editable';

export default ({
  notes,
  onDelete = () => {},
  onNoteClick = () => {},
  onEdit = () => {}
}) => (
  <ul>
    {
      notes.map(item => (
        <li key={item.id}>
          <Note onClick={onNoteClick.bind(null, item.id)}>
            <Editable
              editing={item.editing}
              value={item.task}
              onEdit={onEdit.bind(null, item.id)}
            />
            <button onClick={onDelete.bind(null, item.id)}>x</button>
          </Note>
        </li>
      ))
    }
  </ul>
)




