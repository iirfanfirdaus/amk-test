import React, { createContext, useContext, useReducer } from 'react';

const TableContext = createContext();

const initialState = {
    data: [],
    sortBy: null,
    filter: '',
};

const tableReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return { ...state, data: action.payload };
        case 'SET_SORT':
            return { ...state, sortBy: action.payload };
        case 'SET_FILTER':
            return { ...state, filter: action.payload };
        default:
            return state;
    }
};

export const TableProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tableReducer, initialState);
    return (
        <TableContext.Provider value={{ state, dispatch }}>
            {children}
        </TableContext.Provider>
    );
};

export const useTableContext = () => useContext(TableContext);