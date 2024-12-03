import ReactDOM from 'react-dom';
import App from './App';
import { TableProvider } from './context/TableContext';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <TableProvider>
        <App />
    </TableProvider>,
    document.getElementById('root')
);
