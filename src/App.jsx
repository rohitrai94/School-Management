import React from 'react';
import AddSchool from './components/AddSchool';
import ListSchools from './components/ListSchools';

function App() {
    return (
        <div>
            <h1>School Management</h1>
            <AddSchool />
            <ListSchools />
        </div>
    );
}

export default App;
