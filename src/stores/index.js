import todos from './todos';
import list from './list';
import tags from './tags';
import user from './user';

// import Icestore from 'icestore';
import Icestore from '@ice/store';


import logger from '@ice/store-logger';

// const icestore = new Icestore();
// icestore.registerStore('todos', todos);
// icestore.registerStore('list', list);


const stores = {
  todos,
  list,
  tags,
  user,
};

const icestore = new Icestore();


const middlewares = [];
// Turn off logger middleware in production enviroment
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}
icestore.applyMiddleware(middlewares);


Object.keys(stores).forEach(key => icestore.registerStore(key, stores[key]));


export default icestore;
