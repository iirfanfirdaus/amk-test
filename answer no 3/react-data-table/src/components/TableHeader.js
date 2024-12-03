import React, { useState } from 'react';
import { useTableContext } from '../context/TableContext';

const TableHeader = () => {
    const { state, dispatch } = useTableContext();
    const [filterValue, setFilterValue] = useState('');

    const handleSort = (column) => {
        const newSort = state.sortBy === column ? null : column;
        dispatch({ type: 'SET_SORT', payload: newSort });
    };

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value);
        dispatch({ type: 'SET_FILTER', payload: e.target.value });
    };

    return (
        <thead>
            <tr>
                <th onClick={() => handleSort('name')}>Name</th>
                <th onClick={() => handleSort('age')}>Age</th>
                <th onClick={() => handleSort('email')}>Email</th>
            </tr>
            <tr>
                <th>
                    <input
                        type="text"
                        value={filterValue}
                        onChange={handleFilterChange}
                        placeholder="Filter by name"
                    />
                </th>
                <th></th>
                <th></th>
            </tr>
        </thead>
    );
};

export default TableHeader;