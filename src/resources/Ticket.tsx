import { useState } from "react";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';




function Ticket() {
    const pages = "Nuevo Ticket"
    return (
        <>
            <article className='pages'>
                <p>{pages}</p>
            </article>

            <div className="container-main">

                <div className="header-ticket">
                    <ul>
                        <li>Sypago</li>
                        <li>SIMF</li>
                        <li>SGLPAR</li>
                    </ul>
                </div>

                <div className="sidebar">

                </div>

                <div className="content-ticket">

                </div>

            </div>





        </>
    )

}

export default Ticket