import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { red } from '@mui/material/colors';

//Componet ticket
import Select from './Select';


function AccordionExpandDefault() {

  const categoryOptions = [
    { value: "fotos", label: "Fotos" },
    { value: "videos", label: "Videos" },
    { value: "audio", label: "Audio" },
  ];

  const sortOptions = [
    { value: "fecha", label: "Fecha de subida" },
    { value: "alfabetico", label: "Alfabético" },
    { value: "popularidad", label: "Popularidad" },
  ];

  return (
    <div>
      <Accordion defaultExpanded style={{ background: '#212121', color: '#FFFFFF' }} className='accordion-h' >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" style={{ height: 40, border: 'none', fontSize: 23 }} >Nueva Incidencia</Typography>
        </AccordionSummary>
        <AccordionDetails className=''>

          <Typography className='gallery-select'>
            {/* Primer Select con opciones de categorías */}
            <Select options={categoryOptions} />

            {/* Segundo Select con opciones de ordenamiento */}
            <Select options={sortOptions} />

            {/* Tercer Select con cualquier otro conjunto de opciones */}
            <Select options={[
              { value: "a", label: "A" },
              { value: "b", label: "B" },
              { value: "c", label: "C" },
            ]} />


          </Typography>

        </AccordionDetails>
      </Accordion>

      <Accordion style={{ background: '#212121', color: '#FFFFFF' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" style={{ height: 40, border: 'none', fontSize: 23 }}>Header</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionExpandDefault