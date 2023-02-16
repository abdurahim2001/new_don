import React, { useState } from 'react'
import a from './Menu.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img_carusel_1 from '../img/carusel.jpg'
import img_carusel_2 from '../img/caruseL_2.jpg'
import img_carusel_3 from '../img/carusel_3.jpg'
import img_carusel_4 from '../img/carusel_4.jpg'
import img_1 from '../img/img_1.png'
import img_2 from '../img/img_2.png'
import img_3 from '../img/kv_1.jpg'
import img_4 from '../img/kv_2.jpg'
import img_5 from '../img/kv_5.jpg'
import img_6 from '../img/kv_6.jpg'
import img_7 from '../img/kv_7.jpg'
import img_8 from '../img/kv_8.jpg'
import img_9 from '../img/kv_9.jpg'
import img_10 from '../img/vtb_color.svg'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import img_11 from '../img/bac_don.jpg'
import img_12 from '../img/logo (1).svg'
import img_13 from '../img/blok_1.jpg'
import img_14 from '../img/blok_2.jpg'
import img_15 from '../img/blok_3.jpg'
import Footer from './Footer';


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const Menu = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [count, setCount] = useState(0);
    const [co, setCo] = useState(0);
    const [cou, setCou] = useState(0);
    return (
        <div className={a.body}>

            <section className={a.menu_carusel}>

                <div className={a.carusel}>


                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img_carusel_1}
                                alt="First slide"
                            />
                            <Carousel.Caption>



                                <div className={a.carusel_text}>
                                    <div className={a.carusel_h1}><h1>Сердце столицы</h1></div>

                                    <div className={a.carusel_p} ><p>Квартал на Москве-реке рядом с Сити</p> </div>

                                    <div className={a.carusel_btn}><button>Подробнее</button></div>
                                </div>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img_carusel_2}
                                alt="Second slide"
                            />

                            <Carousel.Caption>

                                <div className={a.carusel_text}>
                                    <div className={a.carusel_h1}><h1>Символ</h1></div>

                                    <div className={a.carusel_p} ><p>Новый стиль жизни у центра Москвы</p> </div>

                                    <div className={a.carusel_btn}><button>Подробнее</button></div>
                                </div>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img_carusel_4}
                                alt="Second slide"
                            />

                            <Carousel.Caption>

                                <div className={a.carusel_text}>
                                    <div className={a.carusel_h1}><h1>Остров </h1></div>

                                    <div className={a.carusel_p} ><p>Новая реальность в Москве: жить на острове</p> </div>

                                    <div className={a.carusel_btn}><button>Подробнее</button></div>
                                </div>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img_carusel_3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>

                                <div className={a.carusel_text}>
                                    <div className={a.carusel_h1}><h1>Событие</h1></div>

                                    <div className={a.carusel_p} ><p>Премиальный квартал на западе Москвы</p> </div>

                                    <div className={a.carusel_btn}><button>Подробнее</button></div>
                                </div>

                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>

            </section>

            <section className={a.elem}>

                <div className={a.elem_1}>
                    <div><img src={img_1} alt="" /></div>
                    <div className={a.modal_elem}>
                        <div> <h3 variant="primary" onClick={() => setModalShow(true)}>
                            50% Оплаты - после сдачи дома!
                        </h3>

                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            /></div>
                        <div>
                            <p>0% рассрочка с отсрочкой. Без переплат, страховок и справок о доходе</p>
                        </div>

                    </div>
                </div>


                <div className={a.elem_1}>
                    <div><img src={img_2} alt="" /></div>
                    <div className={a.modal_elem}>
                        <div>
                            <h3 variant="primary" onClick={() => setModalShow(true)}>
                                Trade-in
                            </h3>

                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            /></div>
                        <div>
                            <p>Новая квартира от застройщика взамен старой</p>
                        </div>

                    </div>
                </div>



            </section>
            <div className={a.text_text}> <h1>Поиск квартиры</h1></div>
            <section className={a.kv_section}>





                <div className={a.kv}>


                    {/* 1 */}
                    <div className={a.kv_1}>
                        <div className={a.kv_img}>
                            <img src={img_3} alt="" />
                        </div>
                        <div className={a.kv_text}>
                            <div>  <button>Подробнее
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>

                                </span>


                            </button></div>

                        </div>
                        <div className={a.kv_text_2}>
                            <div className={a.kv_text_h1}>
                                <h2>Остров</h2>

                                <h6 className={a.kv_span_1}><div ></div>Мневники</h6>
                                <h6 className={a.kv_span}><div ></div>Терехово</h6>
                                <h5>От 17 493 840 сом</h5>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className={a.kv_1}>
                        <div className={a.kv_img}>
                            <img src={img_4} alt="" />
                        </div>
                        <div className={a.kv_text}>
                            <div>  <button>Подробнее
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>

                                </span>


                            </button></div>

                        </div>
                        <div className={a.kv_text_2}>
                            <div className={a.kv_text_h1}>
                                <h2>Символ</h2>
                                <h6>Лефортово</h6>
                                <div className={a.kv_1_span}>
                                    <h6 className={a.kv_span_1_1}><div ></div>Авиамоторная.</h6>
                                    <h6 className={a.kv_span_1_2}><div ></div>Пл.Ильича</h6>
                                    <h6 className={a.kv_span_1_3}><div ></div>Римская.</h6>
                                </div>
                                <h5>От 9 493 840 сом</h5>
                            </div>
                        </div>
                    </div>



                </div>

                <div className={a.kv}>


                    {/* 1 */}
                    <div className={a.kv_1}>
                        <div className={a.kv_img}>
                            <img src={img_5} alt="" />
                        </div>
                        <div className={a.kv_text}>
                            <div>  <button>Подробнее
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>

                                </span>


                            </button></div>

                        </div>
                        <div className={a.kv_text_2}>
                            <div className={a.kv_text_h1}>
                                <h2>Событие</h2>
                                <h6>Раменки</h6>
                                <div className={a.kv_1_span}>
                                    <h6 className={a.kv_span_1_1}><div ></div>Мичуринский проспект</h6>
                                    <h6 className={a.kv_span_1_2}><div ></div>Аминьевская</h6>
                                </div>

                                <h5>От 14 123 250   сом</h5>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className={a.kv_1}>
                        <div className={a.kv_img}>
                            <img src={img_6} alt="" />
                        </div>
                        <div className={a.kv_text}>
                            <div>  <button>Подробнее
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>

                                </span>


                            </button></div>

                        </div>
                        <div className={a.kv_text_2}>
                            <div className={a.kv_text_h1}>
                                <h2>Река</h2>

                                <h6 >Мичуринский проспект д. 60 корп.1</h6>
                                <h6 className={a.kv_span_1_1}><div ></div>Мичуринский проспект</h6>
                                <h5>От 42 493 850 сом</h5>
                            </div>
                        </div>
                    </div>



                </div>


                <div className={a.kv}>


                    {/* 1 */}
                    <div className={a.kv_1}>
                        <div className={a.kv_img}>
                            <img src={img_7} alt="" />
                        </div>
                        <div className={a.kv_text}>
                            <div>  <button>Подробнее
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>

                                </span>


                            </button></div>

                        </div>
                        <div className={a.kv_text_2}>
                            <div className={a.kv_text_h1}>
                                <h2>Дом на Мосфильмовской</h2>

                                <h6 >ул. Мосфильмовская, 8</h6>
                                <h6 className={a.kv_span_1_1}><div ></div>Минская</h6>
                                <h5>От 129 453 540 сом</h5>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className={a.kv_1}>
                        <div className={a.kv_img}>
                            <img src={img_8} alt="" />
                        </div>
                        <div className={a.kv_text}>
                            <div>  <button>Подробнее
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>

                                </span>


                            </button></div>

                        </div>
                        <div className={a.kv_text_2}>
                            <div className={a.kv_text_h1}>
                                <h2>Сердце Столицы</h2>
                                <h6>Хорошево-Мневники</h6>
                                <div className={a.kv_1_span}>
                                    <h6 className={a.kv_span_1_1}><div ></div>Хорошево.</h6>
                                    <h6 className={a.kv_span_1_2}><div ></div>Шелепиха</h6>
                                </div>
                                <h5>От 18 493 840 сом</h5>
                            </div>
                        </div>
                    </div>



                </div>

                <section className={a.body_kv}>

                    <div className={a.kv_1_0}>
                        <div className={a.kv_img}>
                            <img src={img_9} alt="" />
                        </div>
                        <div className={a.kv_text}>
                            <div className={a.kv_btn_1}>  <button>Подробнее
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>

                                </span>


                            </button></div>

                        </div>

                        <div className={a.kv_text_2}>
                            <div className={a.kv_text_h1}>
                                <div className={a.kv_1_span}>
                                    <h1 className={a.iz_h1}>ИЗБРАННОЕ.DELUX</h1>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </section>

            <section className={a.kv_btn_color}>

                <button className={a.kv_btn_hover}>Смотреть все предложения</button>

            </section>

            <div className={a.text_text}> <h1> Не только квартиры</h1></div>


            <section className={a.range_section}>

                <div className={a.div_auto}>
                    <div className={a.bac_auto}></div>
                    <div className={a.bac_text}>
                        <h5>Собственные парковочные места для машины или мотоцикла.</h5>
                        <button>Выбрать</button>



                    </div>
                </div>
                <div className={a.div_auto}>
                    <div className={a.bac_auto}></div>
                    <div className={a.bac_text}>
                        <h5>Собственные парковочные места для машины или мотоцикла.</h5>
                        <button>Выбрать</button>



                    </div>
                </div>
                <div className={a.div_auto}>
                    <div className={a.bac_auto}></div>
                    <div className={a.bac_text}>
                        <h5>Собственные парковочные места для машины или мотоцикла.</h5>
                        <button>Выбрать</button>



                    </div>
                </div>

            </section>

            <section className={a.don_section}>


                <div className={a.don_bac}>
                    <div className={a.don_bac_img}><img src={img_12} alt="" /></div>

                    <div className={a.don_bac_text}>
                        <div className={a.don_bac_h4}><h4>Крупнейший девелопер Москвы, одна из самых <br />  стабильных компаний на рынке недвижимости России.</h4></div>
                        <div className={a.don_bac_btn}>
                            <button className={a.don_bac_btn_1}>Подробнее</button>
                            <button className={a.don_bac_btn_1}>История</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className={a.blok_4_menu}>

                <div className={a.blok_4}>
                    <h2>1994 год</h2>
                    <hr />
                    <h6>Мы работаем уже 28 лет!</h6>
                    <p>За это время построили целый город!</p>

                </div>
                <div className={a.blok_4}>
                    <h2>5 200 000м²</h2>
                    <hr />
                    <h6>Площадь этого города</h6>
                    <p>В этом городе ни один дом не похож на другой.</p>

                </div>
                <div className={a.blok_4}>
                    <h2>60 000 человек</h2>
                    <hr />
                    <h6>Население города</h6>
                    <p>Столько человек живет в построенных объектах</p>

                </div>
                <div className={a.blok_4}>
                    <h2>8 400 000 м²</h2>
                    <hr />
                    <h6>Портфель проектов компании</h6>
                    <p>Это еще больше счастливых семей</p>

                </div>
            </section>


            <section className={a.clik_nav}>
                <div className={a.clik_blok}>
                    <div className={a.clik_blok_1}>
                        <div> <img src={img_13} alt="" />
                        </div>
                        <NavLink href="" >Донстрой утвердил проект подсветки для второй «Реки»</NavLink>

                        <div className={a.clik_on}>

                            <div className={a.clik_menu}>

                                <svg onClick={() => setCount(count + 1)}
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                                <h4> {count}</h4>



                            </div>

                            <div>     <button>Подробнее</button></div>
                        </div>


                    </div>
                </div>

                <div className={a.clik_blok}>
                    <div className={a.clik_blok_1}>
                        <div> <img src={img_14} alt="" />
                        </div>
                        <NavLink href="" >Донстрой утвердил проект подсветки для второй «Реки»</NavLink>

                        <div className={a.clik_on}>

                            <div className={a.clik_menu}>

                                <svg onClick={() => setCo(co + 1)}
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                                <h4> {count}</h4>



                            </div>

                            <div>     <button>Подробнее</button></div>
                        </div>


                    </div>
                </div>


                <div className={a.clik_blok}>
                    <div className={a.clik_blok_1}>
                        <div> <img src={img_15} alt="" />
                        </div>
                        <NavLink href="" >Донстрой утвердил проект подсветки для второй «Реки»</NavLink>

                        <div className={a.clik_on}>

                            <div className={a.clik_menu}>

                                <svg onClick={() => setCou(cou + 1)}
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                                <h4> {count}</h4>



                            </div>

                            <div>     <button>Подробнее</button></div>
                        </div>


                    </div>
                </div>
            </section>
            <section className={a.kv_btn_color}>

                <button className={a.kv_btn_hover}>Смотреть все новости</button>

            </section>

           <Footer/>
            <dir className={a.fot_w}></dir>

        </div>
    )
}

export default Menu