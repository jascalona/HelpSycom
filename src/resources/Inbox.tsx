import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';

//Icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from "react-router-dom";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import DropdownMenu from './Ibox/Dropdown';

function Ticket() {

    const pages = "Ibox";
    // Datos de ejemplo para los mensajes
    const messages = [
        {
            id: 1,
            asunto: "Bienvenido al HelpDesk de Sycom",
            createdBy: "j.escalona@example.com",
            date: "2025-08-28",
            body: "Actualmente se está diseñando la interfaz de la aplicación de HelpDesk. ¡Estamos emocionados de tenerte a bordo!"
        },
        {
            id: 2,
            asunto: "Problema con el acceso a la plataforma",
            createdBy: "ana.lopez@example.com",
            date: "2025-08-27",
            body: "Hola, no puedo acceder a la plataforma. He intentado con mi contraseña y no funciona. ¿Podrían ayudarme?"
        },
        {
            id: 3,
            asunto: "Reporte de un nuevo bug en la app móvil",
            createdBy: "carlos.perez@example.com",
            date: "2025-08-26",
            body: "Se ha detectado un error al intentar subir archivos desde la app móvil. La subida se queda en 0% y la aplicación se congela. "
        }
    ];

    // Estado para el mensaje seleccionado, inicializado como null
    const [selectedMessage, setSelectedMessage] = useState(messages[1111]);

    return (
        <>
            <div className="container-product">
                <div className="header-ticket">

                    <h2>{pages}</h2>

                    <ul className="sub-menu">
                        <li><Link to="#ExportFile"><span className='icon'><SaveAltIcon sx={{ fontSize: 25 }} /></span></Link></li>
                        <li><Link to="#tracerLog"><span className='icon'><ShowChartIcon sx={{ fontSize: 25 }} /></span></Link></li>
                        <li><Link to="#Cerrado"><span className='icon'><CheckCircleIcon sx={{ fontSize: 25 }} /></span></Link></li>

                        <DropdownMenu />
                        
                    </ul>
                </div>

                <div className="sidebar">
                    <div className="head-sidebar">
                        <div className="title">
                            <p>Tickets Prioritarios <strong>({messages.length})</strong></p>
                            <hr />
                            <div className="search">
                                <input type="text" placeholder="Buscar..." />
                                <span className="search-icon"><SearchIcon sx={{ fontSize: 20 }} /></span>
                            </div>
                        </div>
                    </div>

                    <div className="gallery-product">
                        {messages.map(message => (
                            <article
                                key={message.id}
                                className={`cards-message ${selectedMessage && selectedMessage.id === message.id ? 'active' : ''}`}
                                onClick={() => setSelectedMessage(message)}
                            >
                                <div className="content-card">
                                    <div className="h-message">
                                        <small>{message.createdBy}</small>
                                        <small>{message.date}</small>
                                    </div>
                                    <div className="h-asunto">
                                        <span>{message.asunto}</span>
                                    </div>
                                </div>
                                <hr />
                            </article>
                        ))}
                    </div>
                </div>

                <div className="content-ticket">
                    {selectedMessage ? (
                        <>
                            <div className="head-content-ticket">
                                <p><strong>Asunto:</strong> {selectedMessage.asunto}</p>
                                <div className="user-creation">
                                    <span className="icon"><AccountCircleIcon sx={{ fontSize: 50 }} /></span>
                                    <div className="de-user">
                                        <small className="nameUser"><strong>Creado por: </strong> <i> {selectedMessage.createdBy}</i></small>
                                        <small><strong> El: </strong> {selectedMessage.date}</small>
                                        <br />
                                        <span className="icon"> <InfoIcon sx={{ fontSize: 20 }} /></span>
                                    </div>
                                </div>
                            </div>

                            <div className="content-message">
                                <article className="message">
                                    <p className="body-menssage">
                                        {selectedMessage.body}
                                    </p>
                                </article>
                            </div>
                        </>
                    ) : (
                        <div className="no-message-selected">
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Ticket;