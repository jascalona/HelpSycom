import { useState } from "react";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';

//Componentes para Inbox
import ContentMsj from './Ibox/Content'

function Ticket() {
    const pages = "Ibox"
    const Asunto = "Bienvenido al HelpDesk de Sycom, actualmente se esta diseñando la interfaz"
    const createdBy = "j.escalona@example.com"
    const dateTicket = "2025-08-28";

    //Conetenidor del msj
    const Msj = "Contenido del Msj"
    return (
        <>

            <div className="container-product">

                <div className="header-ticket">
                    <h3>{pages}</h3>
                    <ul>
                        <li>Other funtion</li>
                    </ul>
                </div>

                <div className="sidebar">
                    <div className="head-sidebar">
                        <div className="title">
                            <p>Tickets Proritarios <strong>(18)</strong></p>
                            <hr />
                            <div className="search">
                                <input type="text" placeholder="Buscar..." />
                                <span className="search-icon"><SearchIcon sx={{ fontSize: 20 }} /></span>
                            </div>

                        </div>

                    </div>

                    <div className="gallery-product">

                        <article className="cards-message">
                            <div className="content-card">
                                <div className="h-message">
                                    <small>{createdBy}</small>
                                    <small>{dateTicket}</small>
                                </div>

                                <div className="h-asunto">
                                    <span >{Asunto}</span>
                                </div>
                            </div>
                            <hr />
                        </article>

                        <article className="cards-message">
                            <div className="content-card">
                                <div className="h-message">
                                    <small>{createdBy}</small>
                                    <small>{dateTicket}</small>
                                </div>

                                <div className="h-asunto">
                                    <span >{Asunto}</span>
                                </div>
                            </div>
                            <hr />
                        </article>
                    </div>

                </div>

                <div className="content-ticket">
                    <div className="head-content-ticket">
                        <p><strong>Asunto:</strong> {Asunto}</p>

                        <div className="user-creation">
                            <span className="icon"><AccountCircleIcon sx={{ fontSize: 50 }} /></span>

                            <div className="de-user">
                                <small className="nameUser"><strong>Creado por: </strong> <i> {createdBy}</i></small>
                                <small><strong> El: </strong> {dateTicket}</small>
                                <br />
                                <span className="icon"> <InfoIcon sx={{ fontSize: 20 }} /></span>

                            </div>
                        </div>
                    </div>

                    <div className="content-message">
                        <article className="message">
                            <p className="body-menssage">
                                {Msj}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam esse eius optio culpa debitis odio voluptate natus unde nulla quis perspiciatis nesciunt aspernatur magnam nihil, velit voluptas harum possimus pariatur totam temporibus facilis! Soluta, inventore fugiat minus sapiente deserunt, iusto aut facere ex provident ratione doloribus dolorum quod nulla tempore placeat at autem nihil saepe repudiandae! Veniam eligendi obcaecati iusto velit sapiente. Id consequatur distinctio, libero modi iste pariatur in, quidem repudiandae assumenda harum est magnam, maxime minus culpa ut fugit aliquam. Ipsam consectetur quia reprehenderit voluptatum sint dolores earum aspernatur quas, sunt tempora vero, similique quibusdam quod nulla!lorem2000
                            </p>
                        </article>
                    </div>


                </div>

            </div>





        </>
    )

}

export default Ticket