import { createStore } from 'redux';


// Action: object w/ `type` property
const INCREMENT = 'INCREMENT';
const increment = amount => ({type:INCREMENT, amount});

function reducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + action.amount;
  }
  return state;
}

function createStore(reducer) {
  let state;
  const listeners = [];


  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(i => i());
  }

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  return {
    dispatch,
    getState,
    subscribe,
  }
}



const store = createStore(reducer);

store.subscribe(
  () => render()
)

store.dispatch({type:INCREMENT, 400});
store.dispatch({type:INCREMENT, 10});

function render() {
  const currentState = store.getState();
  console.log(currentState);
  document.body.innerHTML = currentState;
}