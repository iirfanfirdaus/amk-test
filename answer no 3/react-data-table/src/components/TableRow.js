import React from 'react';

const TableRow = React.memo(({ item }) => {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
        </tr>
    );
});

export default TableRow;