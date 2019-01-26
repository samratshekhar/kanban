import React from 'react';

import Note from './Note';
import Editable from './Editable';

export default ({
  notes,
  onDelete = () => {},
  onNoteClick = () => {},
  onEdit = () => {}
}) => (
  <ul className='notes'>
    {
      notes.map(item => (
        <li key={item.id}>
          <Note className='note' onClick={onNoteClick.bind(null, item.id)}>
            <Editable
              className='editable'
              editing={item.editing}
              value={item.task}
              onEdit={onEdit.bind(null, item.id)}
            />
            <button className='delete-note' onClick={onDelete.bind(null, item.id)}>x</button>
          </Note>
        </li>
      ))
    }
  </ul>
)




