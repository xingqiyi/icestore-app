import todos from './todos';
import list from './list';
import Icestore from 'icestore';

// const icestore = new Icestore();
// icestore.registerStore('todos', todos);
// icestore.registerStore('list', list);


const stores = {
    todos,
    list,
  };
  
  const icestore = new Icestore();
  Object.keys(stores).forEach(key => icestore.registerStore(key, stores[key]));

  

export default icestore;