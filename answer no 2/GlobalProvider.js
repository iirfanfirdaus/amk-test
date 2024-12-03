import React, { createContext, useReducer, useContext } from 'react';

// Create a context
const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

// Define initial state
const initialState = {
    count: 0,
};

// Define a reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

// Create a provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
};

// Custom hooks for accessing state and dispatch
export const useGlobalState = () => {
    return useContext(GlobalStateContext);
};

export const useGlobalDispatch = () => {
    return useContext(GlobalDispatchContext);
};
