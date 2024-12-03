import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalProvider } from './GlobalProvider'; // Adjust the import based on your file structure
import Counter from './Counter'; // Adjust the import based on your file structure

const App = () => {
    return (
        <GlobalProvider>
            <Counter />
        </GlobalProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
