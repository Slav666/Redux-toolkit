const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const CREAM_ORDERED = "CREAM_ORDERED";
const CREAM_RESTORED = "CREAM_RESTORED";
function orderCake() {
  return {
    type: "CAKE_ORDERED",
    payload: 1,
  };
}
function cakeRestored(qty) {
  return {
    type: "CAKE_RESTOCKED",
    payload: qty,
  };
}

function orderIceCream(qty = 1) {
  return {
    type: "CREAM_ORDERED",
    payload: qty,
  };
}

function iceCreamRestored(qty = 1) {
  return {
    type: "CREAM_RESTORED",
    payload: qty,
  };
}

const initialCakeState = {
  numberOfCAke: 10,
};
const initialIceState = {
  numberOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCAke: state.numberOfCAke - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCAke: state.numberOfCAke + action.payload,
      };

    default:
      return state;
  }
};

const iceReducer = (state = initialIceState, action) => {
  switch (action.type) {
    case CREAM_ORDERED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    case CREAM_RESTORED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
      };

    default:
      return state;
  }
};

const roodReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceReducer,
});
const store = createStore(roodReducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(cakeRestored(3));
store.dispatch(orderIceCream());
store.dispatch(orderIceCream());
store.dispatch(iceCreamRestored(2));

unsubscribe();
