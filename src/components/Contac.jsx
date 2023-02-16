import React from 'react'
import a from './Contac.module.css'
import { NavLink } from 'react-bootstrap';
import img_10 from '../img/vtb_color.svg'
import Form from 'react-bootstrap/Form';
import img_11 from '../img/bac_don.jpg'
import img_12 from '../img/logo (1).svg'

const Contac = () => {
    return (
        <div className={a.body}>

         <div  className={a.menu}>   
            <section className={a.login_menu}>
                <div className={a.login}>
                    <div><h2>Личный кабинет</h2></div>
                    <div><h4>Вход/Регистрация</h4></div>
                    <div><p>Мобильный телефон</p></div>
                    <div><input placeholder="Телефон номер" type="tel" /></div>
                    <div><p>На указанный номер телефона будет отправлено СМС с кодом подтверждения.</p></div>
                    <div className={a.login_btn}><button>Запросить код подтверждения</button></div>
                </div>
                <div></div>
            </section>
            <section className={a.footer_menu}>
                <div className={a.footer_blok_1}>

                    <div className={a.select_1}>
                        <div className={a.footer_selekt}>
                            <div>
                                <h1>Остались вопросы?</h1>
                                <h4>Оставьте свои контактные данные, и мы свяжемся с вами</h4>
                            </div>

                            <div className={a.selekt_nav}>
                                <div className={a.selekt_flex}>
                                    <div className={a.selelt}>
                                        <input placeholder='Имя' type="text" />
                                        <select>
                                            <option ></option>
                                            <option className={a.option_1}>Сегодня</option>
                                            <option >Завтра </option>
                                            <option > После завтра</option>
                                        </select>
                                    </div>
                                    <div className={a.selelt}>
                                        <input placeholder='Телефон номер' type="tel" />
                                        <select>
                                            <option ></option>
                                            <option className={a.option_1}>Сегодня</option>
                                            <option >Завтра </option>
                                            <option > После завтра</option>
                                        </select>
                                    </div>
                                </div>
                                <button className={a.selekt_nav_btn}>Отправить</button>

                            </div>
                        </div>
                    </div>


                </div>
            </section>
            </div>
            <footer className={a.footer_nowe}>
                <div className={a.footer_1}>
                    <div className={a.fot_1div_1}>
                        <img src={img_12} alt="" />
                        <p>© 1994-2023, ООО «Донстрой»</p>
                    </div>
                    <div className={a.fot_1div_2}>
                        <h1>+7 (495) 116-84-41</h1>
                        <p>пн-пт: 9:00-21:00, сб-вс: 10:00-20:00</p>
                    </div>
                </div>

                <hr />

                <div className={a.footer_2}>
                    <div className={a.fot_img_text}>
                        <img src={img_10} alt="" />
                        <p>Финансовый партнер</p>
                    </div>


                    <div className={a.footer_1_text}>
                        <div>
                            <h2>Для жизни</h2>
                            <NavLink className={a.a_fot} href="">Все объекты</NavLink>
                            <NavLink className={a.a_fot} href="">Подбор по параметрам</NavLink>
                            <NavLink className={a.a_fot} href="">Машиноместа</NavLink>
                            <NavLink className={a.a_fot} href="">Кладовые</NavLink>
                            <NavLink className={a.a_fot} href="">Способы покупки</NavLink>
                            <NavLink className={a.a_fot} href="">Инвестировать в недвижимость</NavLink>

                        </div>

                        <div>
                            <h2>Коммерческая</h2>
                            <NavLink className={a.a_fot} href="">Купить</NavLink>
                            <NavLink className={a.a_fot} href="">Подбор по параметрам</NavLink>


                        </div>

                        <div>
                            <h2>О компании</h2>
                            <NavLink className={a.a_fot} href="">История</NavLink>
                            <NavLink className={a.a_fot} href="">Команда</NavLink>
                            <NavLink className={a.a_fot} href="">Награды</NavLink>
                            <NavLink className={a.a_fot} href="">Кладовые</NavLink>
                            <NavLink className={a.a_fot} href="">Дочерние компании</NavLink>
                            <NavLink className={a.a_fot} href="">Работа в компании</NavLink>

                        </div>
                        <div>
                            <h2>О компании</h2>
                            <NavLink className={a.a_fot} href="">История</NavLink>
                            <NavLink className={a.a_fot} href="">Команда</NavLink>
                            <NavLink className={a.a_fot} href="">Награды</NavLink>
                            <NavLink className={a.a_fot} href="">Кладовые</NavLink>
                            <NavLink className={a.a_fot} href="">Дочерние компании</NavLink>
                            <NavLink className={a.a_fot} href="">Работа в компании</NavLink>

                        </div>



                    </div>

                </div>
            </footer>
            <div className={a.footer_w}>

            </div>
        </div>
    )
}

export default Contac