import { useState } from 'react'

function Dashboard() {

    const pages = "Dashboard";
    return (

        <>
            <article className='pages'>
                <p>{pages}</p>
                <small>Dashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, laboriosam.</small>
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

        </>
    )
}

export default Dashboard