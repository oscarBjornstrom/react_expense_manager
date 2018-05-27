import {createStore} from 'redux';

// const add = ({a, b}, c) => {
//     return a + b + c;
// }
// console.log(add({a:1, b:12}, 100));

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT', incrementBy
    // incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
     decrementBy
 });

const setCount = ({count} = {}) => ({type: 'SET', count})
const reset = () => ({type: 'RESET'})

//Reducers
//1. Reducers are pure functions
//2. Never change state or action

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {count: action.count}
        case 'RESET':
            return {count: 0};

        default:
            return state;
    }
};


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    //store. subscribe returns a way to unsubscribe
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(reset());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(setCount({count: 101}))
