import React from 'react';
import './TarjetaUsuario.css';

function TarjetaUsuario({ nombre, edad, profesion, tareas = [] }) {
    return (
        <div className="tarjeta-usuario">
            <h3>{nombre}</h3>
            <p>Edad: {edad}</p>
            <p>Profesión: {profesion}</p>
            <h4>Tareas:</h4>
            <ul>
                {tareas.length > 0 ? (
                    tareas.map((tarea, index) => <li key={index}>{tarea}</li>)
                ) : (
                    <li>No hay tareas asignadas</li>
                )}
            </ul>
        </div>
    );
}

export default TarjetaUsuario;
