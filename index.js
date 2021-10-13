const redux = require('redux');
const combineReducers = redux.combineReducers;
const createStore = redux.createStore;

// Action name---
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// Action--
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: 'Second redux action',
  };
}

// Reducer--
// (previousState, action) => newState
const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numberOfIceCream: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);
console.log('Initial state', store.getState());

// kalau ada perubahan state, jalankan function tersebut.
// store.subscribe() returns a unsubscribe function for unsubscribe
const unsubscribe = store.subscribe(() =>
  console.log('Updated state', store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
