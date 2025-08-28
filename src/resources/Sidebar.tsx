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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CategoryIcon from '@mui/icons-material/Category';
import TimerOffIcon from '@mui/icons-material/TimerOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AreaChartIcon from '@mui/icons-material/AreaChart';
import GroupIcon from '@mui/icons-material/Group';
import HandymanIcon from '@mui/icons-material/Handyman';
import PersonIcon from '@mui/icons-material/Person';


//Icon product
import SpeakerPhoneIcon from '@mui/icons-material/SpeakerPhone';
import DevicesIcon from '@mui/icons-material/Devices';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';




import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


function Sidebar() {
    const user = "JEscalona"

    // Estado para el modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Estados para los menús desplegables
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
        'Ticket': false,
        //'profile': false,
        'productos': false
    });

    const toggleMenu = (menuId: string) => {
        setOpenMenus(prev => ({
            ...prev,
            [menuId]: !prev[menuId]
        }));
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
                        <h3><strong>S</strong>ycom</h3>
                    </div>

                    <div className="sidebar-nav">
                        <h6 className="nav-title">MENU</h6>
                        <ul>

                            <li className={`nav-item ${openMenus['dashboard'] ? 'active' : ''}`}>
                                <Link to="/Dashboard">
                                    <span className="icon"><DashboardIcon sx={{ fontSize: 20 }} /></span>
                                    <span>Dashboard</span>
                                </Link>
                            </li>

                            <li className={`nav-item ${openMenus['Ticket'] ? 'active' : ''}`}>
                                <a href="#" onClick={(e) => {
                                    e.preventDefault();
                                    toggleMenu('Ticket');
                                }} className="dropdown-toggle">
                                    <span className="icon"><ConfirmationNumberIcon sx={{ fontSize: 20 }} /></span>
                                    <span>Ticket</span>
                                    {openMenus['Ticket'] ?
                                        <KeyboardArrowUpIcon sx={{ fontSize: 18 }} /> :
                                        <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
                                    }
                                </a>
                                {openMenus['Ticket'] && (
                                    <ul className="dropdown-menu">
                                        <li><Link to="/Productos/Bancarios"><span className='icon'><PlaylistAddIcon sx={{ fontSize: 18 }} /></span> Nuevo Ticket</Link></li>
                                        <li><Link to="/Productos/Financieros"><span className='icon'><AllInboxIcon sx={{ fontSize: 18 }} /></span> Bandeja de entra...</Link></li>
                                        <li><Link to="/Productos/Financieros"><span className='icon'><CheckCircleIcon sx={{ fontSize: 18 }} /></span> Cerrado</Link></li>
                                        <li><Link to="/Productos/Financieros"><span className="icon"><TimerOffIcon sx={{ fontSize: 18 }} /></span> Atrasado</Link></li>
                                    </ul>
                                )}
                            </li>

                            <li className={`nav-item ${openMenus['historial'] ? 'active' : ''}`}>
                                <Link to="/Historial">
                                    <span className="icon"><AreaChartIcon sx={{ fontSize: 20 }} /></span>
                                    <span>Reportes</span>
                                </Link>
                            </li>

                            <li className={`nav-item ${openMenus['productos'] ? 'active' : ''}`}>
                                <a href="#" onClick={(e) => {
                                    e.preventDefault();
                                    toggleMenu('productos');
                                }} className="dropdown-toggle">
                                    <span className="icon"><CategoryIcon sx={{ fontSize: 20 }} /></span>
                                    <span>Productos</span>
                                    {openMenus['productos'] ?
                                        <KeyboardArrowUpIcon sx={{ fontSize: 18 }} /> :
                                        <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
                                    }
                                </a>
                                {openMenus['productos'] && (
                                    <ul className="dropdown-menu">
                                        <li><Link to="/Productos/Tecnologicos"><span className='icon'><SpeakerPhoneIcon sx={{ fontSize: 18 }} /></span> SYPAGO</Link></li>
                                        <li><Link to="/Productos/Financieros"><span className='icon'><DevicesIcon sx={{ fontSize: 18 }} /></span> SIMF</Link></li>
                                        <li><Link to="/Productos/Financieros"><span className="icon"><CurrencyExchangeIcon sx={{ fontSize: 18 }} /></span> SGLPAR</Link></li>
                                    </ul>
                                )}
                            </li>
                        </ul>

                        <h6 className="nav-title">Mi cuenta</h6>
                        <ul>
                            <li className={`nav-item ${openMenus['profile'] ? 'active' : ''}`}>
                                <a href="#" onClick={(e) => {
                                    e.preventDefault();
                                    toggleMenu('profile');
                                }} className="dropdown-toggle">
                                    <span className="icon"><PersonIcon sx={{fontSize: 20}}/></span>
                                    <span>Perfil</span>
                                </a>
                      
                            </li>

                            <li className="nav-item">
                                <a href="#">
                                    <span className="icon">🔑</span>
                                    <span>Cerrar Sesion</span>
                                </a>
                            </li>


                        </ul>

                        <h6 className="nav-title">Ajustes</h6>
                        <ul>

                            <li className={`nav-item ${openMenus['group-user'] ? 'active' : ''}`}>
                                <Link to="/GroupUser">
                                    <span className="icon"><GroupIcon sx={{ fontSize: 20 }} /></span>
                                    <span>Grupo de Usuarios</span>
                                </Link>
                            </li>


                             <li className={`nav-item ${openMenus['group-user'] ? 'active' : ''}`}>
                                <Link to="/GroupUser">
                                    <span className="icon"><HandymanIcon sx={{ fontSize: 20 }} /></span>
                                    <span>Herramientas</span>
                                </Link>
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