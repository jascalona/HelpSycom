import * as React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div className='component-dropdown'>


            {/*Contenedor principal para el dropdown*/}
            <div style={{ position: 'relative', display: 'inline-block' }}>
                {/* Botón que activa el dropdown */}
                <span onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                    <MoreVertIcon sx={{ fontSize: 25 }} />
                </span>

                {/* Menú desplegable */}
                {isOpen && (
                    <ul
                        style={{
                            position: 'absolute',
                            top: '100%', // Posiciona el menú justo debajo del icono
                            left: 0,
                            zIndex: 100, // Asegura que el menú esté sobre otros elementos
                            backgroundColor: '#ffffff31',
                            border: '1px solid rgba(204, 204, 204, 0.45)fff7d',
                            listStyle: 'none',
                            padding: 0,
                            margin: '13px -120px', // Espacio entre el icono y el menú
                            borderRadius: '4px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                            display: 'block',
                        }}
                    >
                        <li><Link to="#Escalar Ticket" style={{ display: 'block', padding: '10px 15px', textDecoration: 'none', color: '#00FF00' }}>Escalar Ticket</Link></li>
                        <li><Link to="#Nueva Tarea" style={{ display: 'block', padding: '10px 15px', textDecoration: 'none', color: '#00FF00' }}>Nueva Tarea</Link></li>
                        <li><Link to="#Cerrar Ticket" style={{ display: 'block', padding: '10px 15px', textDecoration: 'none', color: '#00FF00' }}>Cerrar Ticket</Link></li>
                    </ul>
                )}
            </div>

        </div>
    );
};

export default DropdownMenu;