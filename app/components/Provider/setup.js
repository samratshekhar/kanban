import NoteStore from '../../store/NoteStore';
import persist from '../../lib/persist';
import storage from '../../lib/storage';

export default alt => {
  alt.addStore('NoteStore', NoteStore);
  persist(alt, storage(localStorage), 'app');
}