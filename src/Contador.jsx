import React, { useState } from 'react';
import './Contador.css';

function Contador({ addUserHandler }) {
    const [contador, setContador] = useState(0);
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [profesion, setProfesion] = useState('');
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const handleAddTarea = () => {
        if (nuevaTarea) {
            setTareas([...tareas, nuevaTarea]);
            setNuevaTarea(''); // Clear the task input field
        }
    };

    const handleAddUsuario = () => {
        if (nombre && edad && profesion) {
            addUserHandler({
                nombre,
                edad,
                profesion,
                tareas,
            });
            // Clear all input fields and tasks
            setNombre('');
            setEdad('');
            setProfesion('');
            setTareas([]);
            setNuevaTarea('');
        }
    };

    return (
        <div className="contador-container">
            <h2>Contador: {contador}</h2>
            <button className="btn" onClick={() => setContador(contador + 1)}>
                Incrementar
            </button>
            <button className="btn" onClick={() => setContador(contador - 1)}>
                Decrementar
            </button>

            <div className="input-container">
                <input
                    type="text"
                    placeholder="Escribe tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Escribe tu edad"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Escribe tu profesión"
                    value={profesion}
                    onChange={(e) => setProfesion(e.target.value)}
                />
            </div>

            <div className="tareas-container">
                <input
                    type="text"
                    placeholder="Nueva tarea"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                />
                <button className="btn" onClick={handleAddTarea}>
                    Agregar Tarea
                </button>
                <ul>
                    {tareas.map((tarea, index) => (
                        <li key={index}>{tarea}</li>
                    ))}
                </ul>
            </div>

            <button className="btn" onClick={handleAddUsuario}>
                Agregar Usuario
            </button>
        </div>
    );
}

export default Contador;
