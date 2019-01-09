import React from 'react';

import Notes from './Notes';
import { data } from '../data';

export default () => (
  <div>
    <button onClick={() => alert('new note added')}>Add new note</button>
    <Notes notes={ data } />
  </div>
);
