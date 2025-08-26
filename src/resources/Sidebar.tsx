import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';

import Dashboard from './Dashboard'
import Ticket from './Productos'
import GroupUser from './GroupUser'
import Historial from './Historial';


// Importaciones de Material UI
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // <-- Nuevo ícono
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'; // <-- Nuevo ícono


import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


function Sidebar() {
    const user = "JEscalona"

    // Estado para el modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Estado para el menú desplegable de Productos
    const [isProductosOpen, setIsProductosOpen] = useState(false);

    const toggleProductos = () => {
        setIsProductosOpen(!isProductosOpen);
    };

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
                                        <h2 id="modal-modal-title">Notificaciones</h2>
                                        <p id="modal-modal-description">Aquí irán tus notificaciones.</p>
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
                    <div className="sidebar-header">
                        <i className="icon"></i>
                        <h3>Creative Tim</h3>
                    </div>

                    <div className="sidebar-nav">
                        <h6 className="nav-title">MENU</h6>
                        <ul>
                            <li className="nav-item active">
                                <a href="#">
                                    <i className="icon"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#">
                                    <i className="icon"></i>
                                    <span>Tables</span>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="dropdown-toggle">
                                    <i className="icon"></i>
                                    <span>Virtual Reality</span>
                                    <i className="arrow">▼</i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">VR View</a></li>
                                    <li><a href="#">360º Tour</a></li>
                                    <li><a href="#">VR Gallery</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#">
                                    <i className="icon"></i>
                                    <span>RTL</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#">
                                    <i className="icon"></i>
                                    <span>Notifications</span>
                                </a>
                            </li>
                        </ul>

                        <h6 className="nav-title">ACCOUNT PAGES</h6>
                        <ul>
                            <li className="nav-item dropdown">
                                <a href="#" className="dropdown-toggle">
                                    <i className="icon"></i>
                                    <span>Profile</span>
                                    <i className="arrow">▼</i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">My Profile</a></li>
                                    <li><a href="#">Edit Account</a></li>
                                    <li><a href="#">Logout</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#">
                                    <i className="icon"></i>
                                    <span>Sign In</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#">
                                    <i className="icon"></i>
                                    <span>Sign Up</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar-footer">
                        <a href="#" className="btn btn-outline">Documentation</a>
                    </div>

                </nav>

                <main className="container-main">
                    <Routes>
                        <Route path='/Dashboard' element={<Dashboard />} />
                        <Route path='/Ticket' element={<Ticket />} /> {/* Nota: Puedes mantener esta ruta si la necesitas */}
                        <Route path='/Productos/Bancarios' element={<Ticket />} />
                        <Route path='/Productos/Financieros' element={<Ticket />} />
                        <Route path='/Productos/Tecnologicos' element={<Ticket />} />
                        <Route path='/GroupUser' element={<GroupUser />} />
                        <Route path='/Historial' element={<Historial />} />
                    </Routes>
                </main>
            </div>
        </>
    )
}

export default Sidebar