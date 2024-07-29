import { legacy_createStore as createStore } from 'redux';
import { CounterReducer } from "./CounterReducer"
export const Store = createStore(CounterReducer)