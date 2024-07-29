
const intailsState = {
    count: 0,
    age: 10,
    city: 'Banglore',
}

function CounterReducer(state = intailsState, action) {
    switch (action.type) {
        case 'Increment':
            return { ...state, count: state.count + 1 };
        case 'Decrement':
            return { ...state, count: state.count - 1 };
        default:
            return state
    }
}

export { CounterReducer }