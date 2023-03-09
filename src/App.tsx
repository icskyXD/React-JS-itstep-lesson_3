import { Counter, ProductList, AddProductForm } from './components/index';

const App = () => {
  return (
    <div>
      <h1>Redux</h1>
      <ProductList/>
      <AddProductForm/>
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

