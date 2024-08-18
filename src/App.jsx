import React, { useState } from 'react';
import ListaUsuarios from './ListaUsuarios';
import Contador from './Contador';

function App() {
    const [usuarios, setUsuarios] = useState([]);

    const addUserHandler = (nuevoUsuario) => {
        setUsuarios([...usuarios, nuevoUsuario]);
    };

    return (
        <div className="app-container">
            <Contador addUserHandler={addUserHandler} />
            <ListaUsuarios usuarios={usuarios} />
        </div>
    );
}

export default App;
