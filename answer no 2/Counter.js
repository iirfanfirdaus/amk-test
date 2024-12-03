import React from 'react';
import { useGlobalState, useGlobalDispatch } from './GlobalProvider'; // Adjust the import based on your file structure

const Counter = () => {
    const state = useGlobalState();
    const dispatch = useGlobalDispatch();

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
};

export default Counter;
