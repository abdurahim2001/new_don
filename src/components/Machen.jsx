import React, { useState } from 'react'
import a from './Machen.module.css'
import { Link } from "react-router-dom";
import { Modal, NavDropdown, Navbar, Container, Nav, Button, FormControl, Form, NavLink, } from 'react-bootstrap';
import logo_img from '../img/logo (1).svg'



function Machen() {

    return (

        <div className={a.menu}>


           



            <section className={a.color_2}>
                {/* <Navbar bg="center" expand="lg">
                    <Container fluid>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <div className={a.nav_menu}>


                                <Nav className="me-auto my-3 my-lg-5" style={{ maxHeight: '1000px' }} navbarScroll>

                                    <section className={a.menu_section}>


                                        <div className={a.menu_logo}><Link to='/header'><img src={logo_img} alt="" /></Link></div>

                                        <div className={a.menu_text}>
                                            <NavLink href="/"> <b className={a.b_menu}>Главная</b> </NavLink>
                                            <NavLink href="./Glavnay"><b className={a.b_menu}>Квартиры</b> </NavLink>
                                            <NavLink href="/Comer"> <b className={a.b_menu}>Бизнес-класс</b></NavLink>
                                            <NavLink href="/Kvar"><b className={a.b_menu}>Коммерческая недвижимость</b></NavLink>
                                        </div>

                                        <div className={a.menu_igon}>



                                            <div className={a.igon_1}>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                </svg>
                                            </div>

                                            <div className={a.igon_1}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                </svg>
                                            </div>

                                            <div className={a.igon_1}>
                                                <NavLink href="Contac">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                                    </svg>
                                                </NavLink>

                                            </div>

                                        </div>

                                    </section>

                                </Nav>
                            </div>




                        </Navbar.Collapse>
                    </Container>
                </Navbar> */}
 <div className={a.menu_navbar} >

 <Navbar className={a.navbar_color} collapseOnSelect expand="lg" bg="white" variant="white">
                <Container className={a.conteiner}>
                    <Navbar.Brand href="#home"><div className={a.menu_logo}><Link to='/header'><img src={logo_img} alt="" /></Link></div></Navbar.Brand>
                    <div className={a.o_div}></div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                            <NavLink href="/"> <b className={a.b_menu}>Главная</b> </NavLink>
                            <NavLink href="./Glavnay"><b className={a.b_menu}>Квартиры</b> </NavLink>
                            <NavLink href="/Comer"> <b className={a.b_menu}>Бизнес-класс</b></NavLink>
                            <NavLink href="/Kvar"><b className={a.b_menu}>Коммерческая недвижимость</b></NavLink>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                <div className={a.igon_1}>

                                    <svg className={a.svg_menu} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div></Nav.Link>

                            <Nav.Link href="#deets">
                                <div className={a.igon_1}>
                                    <svg className={a.svg_menu} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>
                                </div>
                            </Nav.Link>
                            <Nav.Link eventKey={3} href="Contac">
                                <div className={a.igon_1}>
                                
                                        <svg className={a.svg_menu} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                        </svg>
                                  

                                </div>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


 </div>
            </section>



        </div>
    )
}

export default Machen