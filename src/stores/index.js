import todos from './todos';
import Icestore from 'icestore';

const icestore = new Icestore();
icestore.registerStore('todos', todos);

export default icestore;