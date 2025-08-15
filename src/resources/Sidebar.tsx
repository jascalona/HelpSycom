import { useState } from 'react'

function Sidebar() {
    var pages = "Dashboard";
    return (
        <>
            <div className="contenedor-principal">

                <header className="header">
                    <h1>Dashboard</h1>
                </header>
                
                <nav className="nav">

                    <div className="logo">
                        <p>Logo</p>
                    </div>

                    <ul>
                        <a className='link' href="#Dashboard"><li>Dashboard</li></a>
                        <a className='link' href="#Tikes"><li>Tikes</li></a>
                        <a className='link' href="#Informes"><li>Informes</li></a>
                        <a className='link' href="#Grupo"><li>Grupo de Usuarios</li></a>
                    </ul>

                    <button className='btn-document'>Documentacion</button>
                </nav>
                
                <main className="container-main">
                    
                    <article className='pages'>
                        <p>{pages}</p>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, laboriosam.</small>
                    </article>

                    <div className="content-body">
                        
                      <div className="gallery-grag">
                        
                        <article className='card-grag'>
                            <p>Holas</p>
                            <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, aliquid!</small>
                        </article>

                        <article className='card-grag'>
                            <p>Holas2</p>
                            <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, aliquid!</small>
                        </article>

                      </div>

                      <table>
                        
                      </table>

                    </div>
                
                </main>
            </div>
        </>
    )

}

export default Sidebar