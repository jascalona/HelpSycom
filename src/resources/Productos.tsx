import { useState } from "react";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';




function Ticket() {
    const pages = "Sypago"
    return (
        <>

            <div className="container-product">

                <div className="header-ticket">
                    <ul>
                        <li>Sypago</li>
                    </ul>
                </div>

                <div className="sidebar">

                    <div className="title">
                        <p>Tickets Proritarios <strong>(18)</strong></p>
                    </div>

                    <div className="gallery-product">


                        <article className="card-product">
                            <p>Encabezado</p>
                            <hr />
                            <div className="contenido-card">
                                <h3>Revison de transacciones rechazadas Banesco</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, dignissimos.</p>
                            </div>
                            <hr />
                            <small>Creado: hace 4 horas</small>
                        </article>

                        <div className="test">
                            <article className="card-product">
                                <p>Encabezado</p>
                                <hr />
                                <div className="contenido-card">
                                    <h3>Revison de transacciones rechazadas Banesco</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, dignissimos.</p>
                                </div>
                                <hr />
                                <small>Creado: hace 4 horas</small>
                            </article>

                        </div>


                        <article className="card-product">
                            <p>Encabezado</p>
                            <hr />
                            <div className="contenido-card">
                                <h3>Revison de transacciones rechazadas Banesco</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, dignissimos.</p>
                            </div>
                            <hr />
                            <small>Creado: hace 4 horas</small>
                        </article>

                    </div>
                </div>

                <div className="content-ticket">

                </div>

            </div>





        </>
    )

}

export default Ticket