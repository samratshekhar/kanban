import uuid from 'uuid';

import NoteActions from '../actions/NoteActions';

export default class NoteStore {
  constructor() {
    this.bindActions(NoteActions);
    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Task 1'
        },
        {
          id: uuid.v4(),
          task: 'Task 2'
        }
      ],
    };
  }

  create(note) {
    this.setState({
      notes: this.state.notes.concat(note),
    });
  }
  update(updatedNote) {
    this.setState({
      notes: this.state.notes.map(note => {
        if (note.id === updatedNote.id) {
          return Object.assign({}, note, updatedNote);
        }
        return note;
      }),
    })
  }
  delete(id) {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }
}
