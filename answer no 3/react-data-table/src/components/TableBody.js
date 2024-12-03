import React from 'react';
import { useTableContext } from '../context/TableContext';
import TableRow from './TableRow';

const TableBody = () => {
    const { state } = useTableContext();
    const { data, sortBy, filter } = state;

    const filteredData = React.useMemo(() => {
        return data.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
    }, [data, filter]);

    const sortedData = React.useMemo(() => {
      if (!sortBy) {
        return filteredData
      } else {
        console.log('gaada')
        return filteredData.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
      }
    }, [filteredData, sortBy]);

    return (
        <tbody>
            {sortedData.map((item) => (
                <TableRow key={item.id} item={item} />
            ))}
        </tbody>
    );
};

export default TableBody;