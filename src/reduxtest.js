const { createStore } = require("redux");

const initialState = {
  age: 21,
};

// listen for actions
const myReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "ADD") {
    newState.age += action.val;
  }

  if (action.type === "SUBTRACT") {
    newState.age -= action.val;
  }

  return newState;
};

const store = createStore(myReducer);
// subcribe to state whenever there is a change
store.subscribe(() => {
  console.log("state change" + JSON.stringify(store.getState()));
});

// Actions
store.dispatch({ type: "ADD", val: 10 });

store.dispatch({ type: "SUBTRACT", val: 5 });
