import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { red } from '@mui/material/colors';

//Componet ticket
import Select from './Select';
import { Label } from '@mui/icons-material';

function AccordionExpandDefault() {

  const typeRequest = [
    { value: "", label: "-- Seleccione un Tipo de solicitud --" },
    { value: "Alarmar", label: "Alarmar" },
    { value: "Asignacion de Trabajo", label: "Asignacion de Trabajo" },
    { value: "Consulta", label: "Consulta" },
    { value: "Incidencia", label: "Incidencia" },
    { value: "Incidencia IBP", label: "Incidencia IBP" },
    { value: "Incumplimiento Normativa CCE", label: "Incumplimiento Normativa CCE" },
    { value: "Notificacion", label: "Notificacion" },
    { value: "Reclamo", label: "Reclamo" },
    { value: "Req. de Servicio", label: "Req. de Servicio" },
  ];

  const Modo = [
    { value: "", label: "-- Seleccione el Método de contacto --" },
    { value: "Comunicacion", label: "Comunicacion" },
    { value: "Email", label: "Email" },
    { value: "Directo", label: "Directo" },
    { value: "Llamada", label: "Llamada" },
    { value: "Monitoreo", label: "Monitoreo" },
  ];

  const status = [
    { value: "", label: "-- Defina el estado --" },
    { value: "Asignado", label: "Asignado" },
    { value: "Resuelto", label: "Resuelto" },
    { value: "Cerrado", label: "Cerrado" },
    { value: "Cierre", label: "Cierre" },
    { value: "Temporal", label: "Temporal" },
    { value: "Cancelado", label: "Cancelado" },
  ];


  const levelUrgency = [
    { value: "", label: "-- Seleccione el nivel de prioridad --" },
    { value: "Asignado", label: "Alto" },
    { value: "Resuelto", label: "Bajo" },
    { value: "Cerrado", label: "Medio" },
  ];

  const impacto = [
    { value: "", label: "-- Seleccione el Impacto --" },
    { value: "Afecta al Negocio", label: "Afecta al Negocio" },
    { value: "Afecta Parcialmente al Negocio", label: "Afecta Parcialmente al Negocio" },
    { value: "No Afecta al Negocio", label: "No Afecta al Negocio" },
  ];

  return (
    <div className='main-create-ticket'>
      <Accordion defaultExpanded style={{ background: '#181818', color: '#FFFFFF', }} className='accordion-h' >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" style={{ height: 40, border: 'none', fontSize: 23, }} >Nueva Incidencia</Typography>
        </AccordionSummary>
        <AccordionDetails className=''>

          <Typography className='gallery-select'>
            {/* Primer Select*/}
            <Select options={typeRequest}
              label={"Tipo de Solicitud"}
            />

            {/* Segundo Select*/}
            <Select options={Modo}
              label={"Metodo de Contacto"}
            />


            {/*Tercero Select*/}
            <Select options={levelUrgency}
              label={"Prioridad"}
            />

            {/*Cuarto Select*/}
            <Select options={status}
              label={"Estado"}
            />

            {/*Quinto Select*/}
            <Select options={status}
              label={"Impacto"}
            />

            
            {/*Quinto Select*/}
            <Select options={status}
              label={"Impacto"}
            />

            
            {/*Quinto Select*/}
            <Select options={status}
              label={"Impacto"}
            />

            
            {/*Quinto Select*/}
            <Select options={status}
              label={"Impacto"}
            />


          </Typography>

        </AccordionDetails>
      </Accordion>

      <Accordion style={{ background: '#212121', color: '#FFFFFF' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" style={{ height: 40, border: 'none', fontSize: 23 }}>Detalles del Solicitante</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore provident iusto ipsa, velit deserunt, rem earum expedita repellendus quod perspiciatis aliquam tempora voluptatem consequatur nostrum temporibus, nam voluptates architecto! Facere, fuga odio. Qui inventore molestias incidunt dolorum cumque dolore, nobis dolor laudantium obcaecati quod id ipsam consequuntur voluptate assumenda pariatur voluptatibus explicabo vel saepe at delectus recusandae odit. Tenetur quod enim aperiam aliquam esse alias beatae molestias explicabo quisquam necessitatibus, doloremque nemo at incidunt est sunt sed! Laboriosam modi soluta nisi minus officiis voluptate fugiat repudiandae repellendus minima molestias placeat sint possimus odio accusantium ratione error nesciunt exercitationem, eum adipisci nostrum vitae doloribus consequuntur facere hic. Illo eos voluptatum excepturi fuga eligendi voluptate repudiandae dolorem, nisi nesciunt possimus odio in autem aliquam a? Quibusdam quia esse ex perferendis consequatur nisi unde ratione. Provident tenetur dignissimos rerum iure non accusamus consectetur illum odio, ipsam laborum aspernatur laboriosam dicta, magnam error officiis iusto id obcaecati ipsum cumque quis quam ipsa corrupti? Aut accusantium natus nemo. Harum rem omnis odit non minima, necessitatibus ipsam reprehenderit ullam cupiditate est commodi labore, dolorem perspiciatis beatae aliquam nesciunt corrupti odio ab. Beatae dolorem quam, saepe quasi laboriosam voluptatum pariatur maiores eligendi tenetur quidem! Accusamus ipsum assumenda at facere. Non, voluptate? Labore facere eos, dolor temporibus facilis ea incidunt maxime sequi, accusamus animi error veniam voluptates nesciunt assumenda autem necessitatibus architecto fugit. Quaerat perspiciatis sint eligendi placeat, dicta maxime veniam doloremque soluta, minima alias impedit maiores ducimus nostrum, hic ea reprehenderit! Est in consequatur quasi, reiciendis odit incidunt expedita tempora sequi veritatis provident voluptate sed amet ullam enim ipsam a itaque. Porro praesentium fugit expedita nostrum labore ipsa maxime illo facilis! Culpa numquam nesciunt veritatis consequatur facilis exercitationem quasi minima deleniti officia! Est natus ducimus architecto similique! Vero illum dolor magnam praesentium rerum totam laborum, ducimus ratione quam similique mollitia non et eveniet neque explicabo architecto perferendis earum ab autem? Necessitatibus dolorum, molestiae molestias deserunt sapiente reprehenderit cumque nostrum quidem excepturi sit doloremque ratione quam sed voluptas exercitationem ab est laudantium quas consequatur quo alias tempora neque non? Aperiam saepe corrupti quos accusamus, vero ea, eligendi quisquam rerum, accusantium totam temporibus voluptatum? Atque ut numquam excepturi odit aliquid. Fugit nihil mollitia, at laboriosam excepturi suscipit aut nemo architecto impedit cumque molestiae necessitatibus assumenda itaque consequuntur, eaque veritatis et possimus quos laborum. Assumenda asperiores cumque ut molestiae mollitia nisi. Natus mollitia eaque ex labore architecto totam ab unde magnam, aliquam, praesentium hic. Dolorem impedit quia in molestiae id excepturi, quae eum cumque, dicta voluptatum ipsum doloremque enim sapiente corporis atque nisi similique ad possimus reprehenderit rem temporibus magnam iure vitae? Pariatur iste non dolorum! Quis, nihil expedita corrupti pariatur error temporibus eum dolorum voluptate debitis? Similique hic voluptates odit saepe praesentium atque error, perspiciatis deleniti harum quasi laborum repudiandae provident animi nam sit laudantium nobis repellendus vero id consequatur recusandae? Ratione tempora, dolorem recusandae cumque, harum porro maxime repudiandae quasi consequatur enim culpa laborum quos? Sed corrupti molestiae aliquam deserunt provident aliquid nostrum accusamus fuga itaque cupiditate nesciunt harum ad iste deleniti, mollitia fugiat! Quaerat quos dignissimos hic libero vel numquam asperiores earum distinctio similique placeat dolor at mollitia rerum, nihil ut rem ipsum quod corrupti non cumque sapiente amet ducimus doloremque culpa. Ea, asperiores dolorem voluptas voluptatum magni eligendi, unde libero facilis culpa ipsum, sit mollitia doloribus nesciunt est sed perferendis. Eos excepturi perferendis adipisci numquam nostrum dignissimos eius quidem consequatur, aliquid sit esse fugiat hic eligendi. Numquam voluptatem autem fugit eligendi ut, amet nihil culpa a beatae laboriosam nesciunt deleniti quae libero eveniet perferendis dignissimos ad consequatur veritatis eius facilis asperiores! Voluptate nulla provident iste quibusdam voluptas nemo eaque temporibus hic? Enim nihil ab facere exercitationem ullam cupiditate doloribus ipsa delectus vitae! Provident ad doloremque, architecto esse incidunt dicta quia quasi dolore repellat quos nulla necessitatibus iusto rem deserunt dignissimos sapiente ratione commodi ullam modi culpa accusamus suscipit. Deserunt dolore eos mollitia quo iure enim tempore, pariatur aliquid quisquam, debitis cupiditate at soluta neque quam? Excepturi quo vitae magni sapiente autem consectetur itaque optio animi eveniet tempora facilis at deleniti iusto doloremque odio illum corrupti odit maxime voluptatem provident sit, fugiat dolor iure! Est libero ad voluptas. Minima repudiandae laudantium iste consequuntur quos itaque debitis officia et recusandae blanditiis corporis quibusdam iusto, doloribus ea. Quidem accusamus, fugiat optio assumenda consequuntur natus officia consequatur, cumque ullam dolore laboriosam facilis enim doloribus maxime quasi ratione placeat nisi aliquid corrupti pariatur sapiente, eligendi numquam nostrum. Vitae dolores expedita illum ducimus modi? Eligendi exercitationem, tenetur nulla soluta vel suscipit temporibus accusamus cumque! Suscipit eveniet quo harum quibusdam enim eius amet, neque possimus? Ad nobis libero saepe deleniti ipsum, dolorem beatae nulla dolor cumque rerum a, exercitationem aut, excepturi magni consectetur quia harum accusantium fugiat minima vitae aliquam error vel! Rem ea aliquam quibusdam obcaecati magni maxime maiores voluptatem doloremque ducimus quod? Saepe ex, impedit, quaerat tenetur rem illum laboriosam nesciunt dolore nulla totam blanditiis voluptas, temporibus sapiente deleniti quos. Optio molestias natus corrupti excepturi asperiores harum id reprehenderit deleniti eveniet! Amet natus accusantium necessitatibus fugit corporis sunt quibusdam tenetur veritatis. Doloremque eius repudiandae minima consequuntur unde modi cumque iusto molestiae, impedit accusamus distinctio iste quia magni ipsum asperiores, voluptatem, fuga dolor soluta. Excepturi, ex repellat? Perspiciatis at ab expedita nobis nemo. Repellendus nulla atque harum fugit numquam labore dignissimos, in dolore inventore excepturi enim consequuntur incidunt suscipit perferendis sed vero deleniti maiores perspiciatis facilis sunt. Unde quis sunt eaque error saepe tenetur vel totam iusto aliquam, facilis, deserunt ducimus temporibus maiores nulla atque accusamus ad consequuntur assumenda quisquam nemo nobis odit velit magnam dolore. Minus, autem accusamus! In quisquam at vitae rerum quam iure perspiciatis error quibusdam. Dolore minima corrupti reiciendis assumenda nulla doloremque, dignissimos voluptatum tempore modi cum? Ad commodi recusandae blanditiis odio. Iste mollitia, sapiente quasi quisquam quos dolorem. Et similique reiciendis beatae dolore, nesciunt exercitationem veritatis consequuntur suscipit temporibus repudiandae error odio modi, laudantium assumenda in sint illo laboriosam quae dolorem perspiciatis nostrum vero minima? Reprehenderit perferendis repellat corporis aliquam tempore in maxime qui dolorum sit repudiandae.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionExpandDefault