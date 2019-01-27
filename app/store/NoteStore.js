import uuid from 'uuid';

import NoteActions from '../actions/NoteActions';

export default class NoteStore {
  constructor() {
    this.bindActions(NoteActions);
    this.notes = [
      {
        id: uuid.v4(),
        task: 'Task 1'
      },
      {
        id: uuid.v4(),
        task: 'Task 2'
      }
    ];
  }

  create(note) {
    this.setState({
      notes: this.notes.concat(note),
    });
  }
  update(updatedNote) {
    console.log('update note', updatedNote);
  }
  delete(id) {
    console.log('delete note', id);
  }
}
