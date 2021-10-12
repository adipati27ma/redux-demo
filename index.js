const redux = require('redux');
const createStore = redux.createStore();

// Action name---
const BUY_CAKE = 'BUY_CAKE';

// Action--
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  };
}

// Reducer--
// (previousState, action) => newState
const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log('Initial state', store.getState());

// kalau ada perubahan state, jalankan function tersebut.
// store.subscribe() returns a unsubscribe function for unsubscribe
const unsubscribe = store.subscribe(() =>
  console.log('Update state', store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
