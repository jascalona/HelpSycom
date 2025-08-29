import { useState } from "react";


//Componentes 
import AccordionExpandDefault from './ticket/Accordion'

function CreateTicket() {

    const pages = "Nuevo Ticket";

    return (


        <div className="container-create-ticket">

            <article className='pages'>
                <p>{pages}</p>
                <small>Crea metricas clave. Consulta Informes y analiza la informacion</small>
            </article>

            <div className="main-ticket">
                <AccordionExpandDefault />
            </div>

        </div>
    )


}

export default CreateTicket