import { useState } from "react";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';


function GroupUser() {
    const pages = "Grupo de Usuarios"
    return (
        <>
            <article className='pages'>
                <p>{pages}</p>
                <small>GroupUser Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, laboriosam.</small>
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
                                <th>Id</th>
                                <th>Nombre</th>
                                <th className="hide-on-small">Apellido</th>
                                <th>DPT</th>
                                <th>Roll</th>
                                <th>Privilegios</th>


                            </tr>
                        </thead>

                        <tbody className="tbody-scroll">

                            <tr>
                                <td>1</td>
                                <td>Jose</td>                                
                                <td>Escalona</td>
                                <td>Gestion</td>
                                <td>Admin</td>
                                <td>Escritura/Lectura</td>
                            </tr>
                      
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )

}

export default GroupUser