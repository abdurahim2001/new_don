import React from 'react'
import a from './Kvar.module.css'
import img_1 from '../img/forma_img_1.jpg'
import img_2 from '../img/forma_img_2.jpg'
import img_3 from '../img/forma_img_3.jpg'
import img_4 from '../img/forma_img_4.jpg'
import img_5 from '../img/001.jpg'
import Footer from './Footer'

const Kvar = () => {
    return (
        <div className={a.body}>


            <div className={a.komer_text}><h1>Коммерческая недвижимость</h1></div>

            <section className={a.kvar}>
                <div className={a.komer_flex}>
                    {/* 1 */}
                    <div>
                        <h1>ТОРГОВЫЙ ЦЕНТР ОСТРОВ</h1>
                        <p>станция метро «Терехово»</p>
                        <button className={a.btn}>Подробнее</button>
                    </div>

                    {/* 2 */}
                    <div className={a.kvar_p}>
                        <p>8 635.00 м²</p>
                        <h6>площадь</h6>
                        <p>550 000 000 сом</p>
                        <h6>стоимость</h6>
                    </div>
                    {/* 3 */}
                    <div>
                        <img src={img_1} alt="" />
                    </div>
                   
                </div>
            </section>



            <section className={a.kvar}>
                <div className={a.komer_flex}>
                    {/* 1 */}
                    <div>
                        <h1>ГОНЧАРНАЯ. АКТИВ</h1>
                        <p>г. Москва, ЦАО, район «Таганский», ул. Гончарная, д.1</p>
                        <button className={a.btn}>Подробнее</button>
                    </div>

                    {/* 2 */}
                    <div className={a.kvar_p}>
                        <p>2 349,70 м</p>
                        <h6>площадь</h6>
                        <p>1,2,3,4,5 этаж</p>
                        <p>Расположение</p>
                        <p>565 000 004 </p>
                        <h6>стоимость</h6>
                    </div>
                    {/* 3 */}
                    <div>
                        <img src={img_2} alt="" />
                    </div>
                   
                </div>
            </section>



            <section className={a.kvar}>
                <div className={a.komer_flex}>
                    {/* 1 */}
                    <div>
                        <h1>НОВАЯ ЗВЕЗДА</h1>
                        <p>г. Москва, СЗАО, район «Щукино», ул. Расплетина, д.14 </p>
                        <button className={a.btn}>Подробнее</button>
                    </div>

                    {/* 2 */}
                    <div className={a.kvar_p}>
                        <p>426,90 м</p>
                        <h6>площадь</h6>
                        <p>111 847 800 </p>
                        <h6>стоимость</h6>
                    </div>
                    {/* 3 */}
                    <div>
                        <img src={img_5} alt="" />
                    </div>
                   
                </div>
            </section>


            <section className={a.kvar}>
                <div className={a.komer_flex}>
                    {/* 1 */}
                    <div>
                        <h1>СИМВОЛ. ОФИС</h1>
                        <p>станция метро «Терехово»</p>
                        <button className={a.btn}>Подробнее</button>
                    </div>

                    {/* 2 */}
                    <div className={a.kvar_p}>
                        <p>8 635.00 м²</p>
                        <h6>площадь</h6>
                        <p>550 000 000 сом</p>
                        <h6>стоимость</h6>
                    </div>
                    {/* 3 */}
                    <div>
                        <img src={img_4} alt="" />
                    </div>
                   
                </div>
            </section>


            <section className={a.kvar}>
                <div className={a.komer_flex}>
                    {/* 1 */}
                    <div>
                        <h1>ФИТНЕС-КЛУБ В ЖК АЛЫЕ ПАРУСА</h1>
                        <p>СЗАО, Щукино, ул. Авиационная, д. 79</p>
                        <button className={a.btn}>Подробнее</button>
                    </div>

                    {/* 2 */}
                    <div className={a.kvar_p}>
                        <p>6 074,70 м²</p>
                        <h6>площадь</h6>
                        <p>580 538 329 </p>
                        <h6>стоимость</h6>
                    </div>
                    {/* 3 */}
                    <div>
                        <img src={img_5} alt="" />
                    </div>
                   
                </div>
            </section>


            <section className={a.kvar}>
                <div className={a.komer_flex}>
                    {/* 1 */}
                    <div>
                        <h1>Детский сад</h1>
                        <p>станция метро «Терехово»</p>
                        <button className={a.btn}>Подробнее</button>
                    </div>

                    {/* 2 */}
                    <div className={a.kvar_p}>
                        <p>8 635.00 м²</p>
                        <h6>площадь</h6>
                        <p>550 000 000 сом</p>
                        <h6>стоимость</h6>
                    </div>
                    {/* 3 */}
                    <div>
                        <img src={img_2} alt="" />
                    </div>
                   
                </div>
            </section>

<Footer/>
        </div>
    )
}

export default Kvar