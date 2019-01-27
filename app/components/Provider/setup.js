import persist from '../../lib/persist';
import storage from '../../lib/storage';

import NoteStore from '../../store/NoteStore';
import LaneStorage from '../../store/LaneStorage';

export default alt => {
  alt.addStore('NoteStore', NoteStore);
  alt.addStore('LaneStore', LaneStorage);
  persist(alt, storage(localStorage), 'app');
}