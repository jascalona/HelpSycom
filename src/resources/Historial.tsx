import { useState } from "react";

import SaveAltIcon from '@mui/icons-material/SaveAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';


function Tickets() {
    const pages = "Historial de Incidencias"
    return (
        <>
            <article className='pages'>
                <p>{pages}</p>
                <small>Historial de Incidencias Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, laboriosam.</small>
            </article>

            <div className="container-table">
                <div className="header-table">
                    <div className="group-button">
                        <button><SaveAltIcon sx={{ fontSize: 20 }} /></button>
                        <button><SaveAltIcon sx={{ fontSize: 20 }} /></button>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Buscar..." />
                    </div>
                </div>

                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr>
                                <th>Ticket Id</th>
                                <th>Fecha</th>
                                <th className="hide-on-small">Asunto</th>
                                <th>Estado</th>
                                <th>Reportado Por:</th>


                            </tr>
                        </thead>

                        <tbody className="tbody-scroll">

                            <tr>
                                <td>125478</td>
                                <td>15/08/2024</td>
                                <td>Solicitudes rechazadas</td>
                                <td className="warning">En proceso</td>
                                <td>Jose Escalona</td>
                            </tr>
                            <tr>
                                <td>125478</td>
                                <td>15/08/2024</td>
                                <td>Solicitudes rechazadas</td>
                                <td className="warning">En proceso</td>
                                <td>Jose Escalona</td>
                            </tr>


                            <tr>
                                <td>125478</td>
                                <td>15/08/2024</td>
                                <td>Solicitudes rechazadas</td>
                                <td className="warning">En proceso</td>
                                <td>Jose Escalona</td>
                            </tr>


                            <tr>
                                <td>125478</td>
                                <td>15/08/2024</td>
                                <td>Solicitudes rechazadas</td>
                                <td className="warning">En proceso</td>
                                <td>Jose Escalona</td>
                            </tr>


                            <tr>
                                <td>125478</td>
                                <td>15/08/2024</td>
                                <td>Solicitudes rechazadas</td>
                                <td className="warning">En proceso</td>
                                <td>Jose Escalona</td>
                            </tr>

                            <tr>
                                <td>125478</td>
                                <td>15/08/2024</td>
                                <td>Solicitudes rechazadas</td>
                                <td className="success">Finalizado</td>
                                <td>Jose Escalona</td>
                            </tr>

                            <tr>
                                <td>125478</td>
                                <td>15/08/2024</td>
                                <td>Solicitudes rechazadas</td>
                                <td className="success">Finalizado</td>
                                <td>Jose Escalona</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}

export default Tickets