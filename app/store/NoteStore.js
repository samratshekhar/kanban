import uuid from 'uuid';

export default class NoteStore {
  constructor() {
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
}
