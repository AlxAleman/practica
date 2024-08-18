import React from 'react';
import TarjetaUsuario from './TarjetaUsuario';

function ListaUsuarios({ usuarios }) {
    return (
        <div className="lista-usuarios">
            {usuarios.map((usuario, index) => (
                <TarjetaUsuario
                    key={index}
                    nombre={usuario.nombre}
                    edad={usuario.edad}
                    profesion={usuario.profesion}
                    tareas={usuario.tareas}  
                />
            ))}
        </div>
    );
}

export default ListaUsuarios;
