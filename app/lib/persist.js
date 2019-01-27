export default function (alt, storage, storeName) {
  try {
    alt.bootstrap(storage.get(storeName))
  } catch (e) {
    console.log(e);
  }

  alt.FinalStore.listen(() => {
    if(!storage.get('debug')) {
      storage.set(storeName, alt.takeSnapshot());
    }
  });
}
