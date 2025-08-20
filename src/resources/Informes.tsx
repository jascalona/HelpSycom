import { useState } from "react";

import SaveAltIcon from '@mui/icons-material/SaveAlt';


const pages = "Informes";

function Informes() {

    return (
        <>
            <article className='pages'>
                <p>{pages}</p>
                <small>Informes Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, laboriosam.</small>
            </article>


            <div className="container-table">

                <div className="header-table">
                    <button><SaveAltIcon sx={{ fontSize: 20 }} /></button>

                    <div className="search">
                        <input type="text" />
                    </div>

                </div>


                <table className="table">
                    <thead className="thead">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>John</td>
                            <td>Doe</td>
                            <td>@social</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </>
    )

}

export default Informes