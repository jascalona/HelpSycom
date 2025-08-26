import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';

import Dashboard from './Dashboard'
import Ticket from './Ticket'
import GroupUser from './GroupUser'
import Historial from './Historial';


// Importaciones de Material UI
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import Modal from '@mui/material/Modal'; // Importa el componente Modal
import Box from '@mui/material/Box'; // Importa Box para dar estilo al contenido


function Sidebar() {
    const user = "JEscalona"

    // Estado para el modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div className="contenedor-principal">

                <header className="header">

                    <div className="content-header">
                        <h1 className='title-header'>HelpDesk Sycom</h1>

                        <div className="name-user">
                            <div className="notification">
                                <button className='btn-notification' onClick={handleOpen}>
                                    <NotificationsActiveIcon sx={{ fontSize: 20 }} />
                                </button>

                                {/* El componente Modal */}
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: 400,
                                        bgcolor: '#f3f3f3f3',
                                        border: '1px solid #6d6d6d87',
                                        borderRadius: '8px',
                                        color: '#1c1c1cf1',
                                        boxShadow: 24,
                                        p: 4,
                                    }}>
                                        <h2 id="modal-modal-title">
                                            Notificaciones
                                        </h2>
                                        <p id="modal-modal-description">
                                            Aquí irán tus notificaciones.
                                        </p>
                                    </Box>
                                </Modal>
                            </div>

                            <div className="dropdown-center">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <AccountCircleIcon sx={{ fontSize: 20 }} /> {user}
                                </button>
                            </div>
                        </div>



                    </div>

                </header>

                <nav className="nav">

                    <div className="logo">
                        <p>Logo</p>
                    </div>

                    <ul>
                        <Link className='link' to="/Dashboard"><li>Dashboard</li></Link>
                        <Link className='link' to="/Ticket"><li>Nuevo Ticket</li></Link>
                        <Link className='link' to="/Historial"><li>Historial</li></Link>
                        <Link className='link' to="/GroupUser"><li>Grupo de Usuarios</li></Link>
                    </ul>

                    <button className='btn-document'>Documentacion</button>
                </nav>

                <main className="container-main">

                    <Routes>
                        <Route path='/Dashboard' element={<Dashboard />} />
                        <Route path='/Ticket' element={<Ticket />} />
                        <Route path='/GroupUser' element={<GroupUser />} />
                        <Route path='/Historial' element={<Historial />} />
                    </Routes>

                </main>
            </div>
        </>
    )

}

export default Sidebar