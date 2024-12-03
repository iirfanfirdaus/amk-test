import React, { useEffect } from 'react';
import { useTableContext } from '../context/TableContext';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const DataTable = () => {
    const { state, dispatch } = useTableContext();

    useEffect(() => {
        // Fetch or set initial data here
        const fetchData = async () => {
            const data = [
              {
                name: 'test',
                age: 20,
                email: 'test@test.com',
              },
              
              {
                name: 'tust',
                age: 22,
                email: 'tust@test.com',
              }
            ];
            dispatch({ type: 'SET_DATA', payload: data });
        };

        fetchData();
    }, [dispatch]);

    return (
        <div>
            <TableHeader />
            <TableBody />
        </div>
    );
};

export default DataTable;