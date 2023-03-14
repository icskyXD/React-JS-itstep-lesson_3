import { useSelector } from 'react-redux';
import { Counter, ProductList, AddProductForm, UsersList, Spinner, PostsList } from './components/index';
import { RootState } from './store';

const App = () => {

  const loader = useSelector<RootState, boolean>((state) => state.loader.loading)

  return (
    <div>
      <h1>Redux</h1>
      <AddProductForm />s
      <ProductList />
      <UsersList />
      {loader && <Spinner />}
      <PostsList/>
      {/* <Counter/> */}
    </div>
  )
};

export default App;

// const initialState = {
//   counter: 0,
// };

// // 1. Нет побочных эффектов
// // 2. Функция должна зависеть от переданных аргументов.

// // @ts-ignore
// const reducer =(state = initialState, action) => {
//   switch (action?.type) {
//     case 'INC':
//       return {...state, counter: state.counter+1};
//     case 'DEC': 
//       return {...state, counter: state.counter-1}
//     case 'RND':
//       return {...state, counter: state.counter+action.payload}
//     default:
//       return state;
//   };
// };
// // @ts-ignore
// let store = reducer(initialState);
// console.log({store});

// store = reducer(store, {type:'INC'})
// store = reducer(store, {type:'INC'})
// console.log({store});
// store = reducer(store, {type:'DEC'})
// console.log({store});
// const rnd = Math.random()*10
// store = reducer(store, {type:'RND', payload: rnd})
// console.log({store});