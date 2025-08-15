import { useState } from 'react'
import './App'

function Header(){

    return(
        <>
            <div>
                <nav className='nav-links'>
                    <div className='logo'>
                        <h3>Logo</h3>
                    </div>

                    <ul>
                        <li className='linkNav'><a href="">Dashboard</a></li>
                        <li className='linkNav'><a href="">Nuevo</a></li>
                        <li className='linkNav'><a href="">Historial</a></li>
                        <li className='linkNav'><a href="">Centro de ayuda</a></li>
                    </ul>

                    <button className='documentacion'>Documentacion</button>

                </nav>
            </div>
        </>
    )

}

export default Header