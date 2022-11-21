const store = require("./app/store");
const cakeAction = require("./features/cake/cakeSlice").cakeAction;
const iceCreamAction =
  require("./features/iceCream/iceCreamSlice").iceCreamAction;
console.log("initial state", store.getState());
// const unsubscribe = store.subscribe(() => {});
const fetchUsers = require("./features/user/userSlice").fetchUsers;
console.log("test", store.getState());
// store.dispatch(cakeAction.ordered());
// store.dispatch(cakeAction.ordered());
// store.dispatch(cakeAction.ordered());
// store.dispatch(cakeAction.restocked(3));
// store.dispatch(iceCreamAction.ordered());
// store.dispatch(iceCreamAction.ordered());
// store.dispatch(iceCreamAction.ordered());
// store.dispatch(iceCreamAction.restocked(3));
store.dispatch(fetchUsers());

// unsubscribe();
