import { useState } from "react";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';




function Ticket() {
    const pages = "Sypago"
    const Asunto = "Ejemplo de Asunto para el Mensaje!"
    const CreadoPor = "Jose Escalona"
    const dateTicket = "2025-08-28";
    return (
        <>

            <div className="container-product">

                <div className="header-ticket">
                    <h3>Sypago</h3>
                    <ul>
                        <li>Other funtion</li>
                    </ul>
                </div>

                <div className="sidebar">
                    <div className="head-sidebar">
                        <div className="title">
                            <p>Tickets Proritarios <strong>(18)</strong></p>
                            <hr />
                            <div className="search">
                                <input type="text" placeholder="Buscar..." />
                                <span className="search-icon"><SearchIcon sx={{ fontSize: 20 }} /></span>
                            </div>

                        </div>

                    </div>


                    <div className="gallery-product">


                        <article className="card-product">
                            <p>Encabezado</p>
                            <hr />
                            <div className="contenido-card">
                                <h3>Revison de transacciones rechazadas Banesco</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, dignissimos.</p>
                            </div>
                            <hr />
                            <small>Creado: hace 4 horas</small>
                        </article>

                        <div className="test">
                            <article className="card-product">
                                <p>Encabezado</p>
                                <hr />
                                <div className="contenido-card">
                                    <h3>Revison de transacciones rechazadas Banesco</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, dignissimos.</p>
                                </div>
                                <hr />
                                <small>Creado: hace 4 horas</small>
                            </article>

                        </div>


                        <article className="card-product">
                            <p>Encabezado</p>
                            <hr />
                            <div className="contenido-card">
                                <h3>Revison de transacciones rechazadas Banesco</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, dignissimos.</p>
                            </div>
                            <hr />
                            <small>Creado: hace 4 horas</small>
                        </article>

                    </div>
                </div>

                <div className="content-ticket">
                    <div className="head-content-ticket">
                        <p><strong>Asunto:</strong> {Asunto}</p>

                        <div className="user-creation">
                            <span className="icon"><AccountCircleIcon sx={{ fontSize: 50 }} /></span>

                            <div className="de-user">
                                <small className="nameUser"><strong>Creado por: </strong> <i> {CreadoPor}</i></small>
                                <small><strong> El: </strong> {dateTicket}</small>
                                <br />
                                <span className="icon"> <InfoIcon sx={{ fontSize: 20 }} /></span>

                            </div>
                        </div>
                    </div>

                    <div className="content-message">
                        <article className="message">
                            <p className="body-menssage">
                                asa                            
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rem hic ex similique obcaecati eum sed. Sunt ex cum totam impedit deleniti, labore maiores architecto, aliquid exercitationem, ipsa ipsam itaque delectus. Vel totam debitis, beatae a ad fuga obcaecati. Corporis delectus hic ex laboriosam pariatur, totam earum quia odio dolores maiores quasi saepe aperiam a architecto nulla laborum nostrum in iusto ut obcaecati explicabo quae. Repudiandae eius praesentium quas voluptatibus odio itaque ut recusandae, consequatur, atque et deserunt mollitia accusantium sit soluta? Illo laborum vitae voluptas minus incidunt corporis qui tenetur similique quis, a inventore nostrum fuga doloribus quisquam? Pariatur architecto, vitae, in minus harum, atque doloremque fugit temporibus sequi voluptate veritatis quisquam voluptatem eveniet quas dolorum asperiores veniam quasi corporis laborum modi nesciunt odit tempora recusandae? At alias ut, ad molestias voluptatem odio officiis aperiam quod maiores deserunt! Pariatur ex numquam aperiam officia eligendi sint sed voluptatibus facilis accusantium fuga architecto nihil, earum enim, ea harum corporis alias, ut quae a soluta. Corrupti neque velit iste atque labore sapiente assumenda nesciunt laborum dicta rerum dignissimos ab aperiam dolorem eligendi, impedit saepe blanditiis tempore ut, nobis inventore. Beatae vero rem inventore pariatur labore odio quae sit, dolore nulla enim et libero a maxime neque debitis placeat adipisci assumenda repellendus, voluptas similique. Aperiam architecto non quam iusto? Corporis ab ut doloremque saepe accusantium veritatis et sunt reprehenderit aliquam. Vero magnam molestiae voluptates possimus pariatur voluptate repellendus eaque accusantium quia debitis dolor amet, asperiores facilis libero eveniet ipsa minus voluptatibus maiores? Quia ab ipsam numquam corporis voluptatum molestias corrupti quidem consequuntur eius? Expedita deleniti ullam labore veniam iste blanditiis aut, vel accusamus debitis minus nisi animi recusandae nam vero facilis maxime eos minima? Ipsum, cumque nihil. Quia distinctio, ducimus omnis neque pariatur quod. Voluptas vitae fugit pariatur temporibus neque magni nulla aut vero nobis dolorem nemo veniam ab eum expedita quidem ullam reiciendis illum voluptate nisi, quia consequuntur asperiores. Blanditiis eligendi quas vel ipsam quod accusantium optio? Sequi praesentium id in magni beatae illum ducimus. Ipsam soluta iste sunt? Dolorum nam officiis ipsam voluptate illo amet porro iusto magnam officia, minus nulla totam dolores nisi molestiae earum eum voluptatibus ab. Nostrum laborum doloribus a maiores aspernatur dolorum officiis voluptatum excepturi temporibus. Deleniti esse libero ratione quaerat, sed placeat fugit dolor tempore laboriosam architecto iusto nesciunt? Iusto facere accusamus qui aspernatur officiis dicta voluptate sit eius! Quidem pariatur dignissimos in ullam laboriosam quaerat. Cupiditate quas, non deserunt quidem possimus facere necessitatibus sapiente assumenda laboriosam vel reiciendis quaerat consequuntur qui animi, ipsa ipsam temporibus maiores dolores dolore mollitia? Porro iusto perspiciatis, ipsam similique libero non explicabo optio dolorum id eius aperiam sunt dolore vel ex eos voluptates cum dolorem nihil totam molestias atque, labore mollitia! Ad voluptatem atque ut. Consequatur, laboriosam ullam officiis, dolorem praesentium laborum quidem soluta officia quibusdam vitae eius veniam tenetur cupiditate aut placeat, quam blanditiis unde distinctio labore. Sequi, corporis unde aut, omnis saepe necessitatibus voluptatum ad voluptatem cumque quos dignissimos dolorem non obcaecati molestiae earum. Fuga eum, illum quam incidunt nobis temporibus! Reprehenderit quo quod voluptate, vel dolores repellat porro officiis. Qui, accusantium labore, unde accusamus minus laudantium voluptas dolore mollitia suscipit neque error inventore nisi officiis autem! Corporis tempora nisi dolore ea cumque corrupti aperiam voluptatibus culpa totam! Totam exercitationem sed ut praesentium recusandae. Eos ea autem, iste, vero ipsa libero, nihil quidem ipsam molestias eius dolore delectus aperiam excepturi doloremque voluptates! Corrupti asperiores quia ipsa, libero nobis in necessitatibus minus tempore vero corporis! Non nobis ab repudiandae asperiores placeat, eligendi aperiam soluta sed enim quidem error totam cumque praesentium ipsum accusantium officiis id minima hic fuga quisquam eveniet ipsam officia. Et itaque aut beatae magnam ducimus reprehenderit, quo aliquid fuga labore unde cum provident. Adipisci debitis est temporibus dolorem error quasi quidem minus molestias pariatur excepturi animi quae, dolores ad ea. Ad sed deleniti esse enim aut vitae corporis, consequatur totam explicabo eligendi a quis deserunt aspernatur iusto optio ab id, praesentium, eius nam quo beatae reiciendis. Consequuntur quos necessitatibus culpa eaque accusantium sequi architecto excepturi atque in. Voluptates, atque illo? Explicabo ab ratione sapiente cumque ipsum! Blanditiis libero asperiores iste, praesentium iure sed amet modi perspiciatis sequi maiores velit maxime labore exercitationem vero? Iure, adipisci vitae saepe minima quam aut commodi odio iusto deleniti error, maxime aliquid illo neque fuga. Autem ut sapiente velit, cumque quis quasi aspernatur dolorem impedit, distinctio voluptate beatae, facere laborum numquam provident dolorum quam dicta fuga maiores doloribus natus assumenda rerum animi aliquid accusamus. Recusandae accusantium earum veniam! Accusamus voluptatibus beatae exercitationem maiores distinctio eaque assumenda, cumque et. Officia odit voluptatem, quam eligendi tenetur aut deserunt quos earum corporis deleniti odio nulla aliquid, vero eaque expedita commodi, harum facere placeat amet! Tempore error perferendis dolores. Veritatis, dolore velit nesciunt praesentium amet neque cumque error quaerat quasi hic, sequi corporis officiis minima recusandae. Laborum dicta praesentium, nisi, id esse hic voluptatibus, quos pariatur repudiandae numquam inventore suscipit impedit repellendus! Quis cupiditate molestias voluptatum eaque reiciendis ducimus, impedit molestiae saepe eligendi quo consectetur. Accusamus tenetur animi autem ex, blanditiis suscipit aliquid soluta sit quaerat quasi atque unde, quidem obcaecati a harum expedita officia culpa aliquam! Culpa iste rem quos sapiente sint illum. Dolorum exercitationem commodi, quia maxime magnam voluptatem illum? Consequuntur, pariatur quam enim quia in non ullam. Facilis quisquam sed rerum molestias ab odit nesciunt, ipsam asperiores sapiente. Repellendus quasi eveniet minima vel nemo veniam dignissimos aperiam et, obcaecati, laborum nostrum consequatur, doloribus excepturi molestias incidunt. Eum quae similique quaerat voluptatem fugit hic mollitia necessitatibus dignissimos? Voluptatem tempora distinctio ducimus placeat cupiditate, iure nam eaque adipisci natus ut necessitatibus maiores repudiandae dolorum sequi ullam cumque nisi! Aut corrupti voluptatum nobis quibusdam ut tempora asperiores excepturi et. Corporis vero at minus odit dolores adipisci voluptatibus, ratione aliquid animi laudantium autem similique perferendis, assumenda ad aspernatur illo quae hic quas qui fugiat iure facere quaerat. Aliquam, sapiente iste, ipsam possimus nam, exercitationem impedit necessitatibus iusto cum error tempora consequatur deleniti et quis amet minus quas tempore doloremque ipsa delectus blanditiis voluptatum ad. Laudantium, ea.    
                            </p>
                        </article>
                    </div>


                </div>

            </div>





        </>
    )

}

export default Ticket