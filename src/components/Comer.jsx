import React from 'react'
import a from './Comer.module.css'
import img_1 from '../img/walking.png'
import Footer from './Footer'



const Comer = () => {
    return (
        <div className={a.body}>
            <div className={a.forma_h1}> <h1>Forma</h1></div>
            <div className={a.forma_p}>

                <p>
                    Forma — девелоперская компания в составе Донстрой, которая специализируется на проектах премиум и бизнес-класса с авторской архитектурой.
                    Компания изучает и создаёт подлинные формы городской жизни, опираясь на три фундаментальных принципа: гений места, дизайн-мышление и целостность
                    образа. Это городские кварталы, построенные на базе локальной идентичности, приоритета только востребованных опций и уникального архитектурного кода.
                </p>

            </div>
            <div className={a.forma_h1}> <h1>Forma</h1></div>


            <section className={a.section_forma}>
                <div className={a.forma_bac}>
                    <div className={a.forma_bac_1}>
                        <h2>Forst</h2>
                        <div className={a.man_flex}>
                           <div  className={a.forma_bac_1_1}> <div className={a.man_color}></div>
                            <div>Тульская</div>
                            </div>
                            <div className={a.forma_bac_1_1}>
                            <div ><img src={img_1} alt="" /></div>
                            <div>14 мин</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={a.forma_bac}>
                    <div className={a.forma_bac_02}>
                        <h2>Forst</h2>
                        <div className={a.man_flex}>
                           <div  className={a.forma_bac_1_1}> <div className={a.man_color}></div>
                            <div>Тульская</div>
                            </div>
                            <div className={a.forma_bac_1_1}>
                            <div ><img src={img_1} alt="" /></div>
                            <div>14 мин</div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className={a.section_forma_2}>
            <div className={a.forma_bac_2}>
                    <div className={a.forma_bac_1_2}>
                        <h2>Forst</h2>
                        <div className={a.man_flex_2}>
                           <div  className={a.forma_bac_1_1_2}> <div className={a.man_color}></div>
                            <div>Тульская</div>
                            </div>
                            <div className={a.forma_bac_1_1_2}>
                            <div ><img src={img_1} alt="" /></div>
                            <div>14 мин</div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className={a.section_forma}>
                <div className={a.forma_bac}>
                    <div className={a.forma_bac_03}>
                        <h2>Forst</h2>
                        <div className={a.man_flex}>
                           <div  className={a.forma_bac_1_1}> <div className={a.man_color}></div>
                            <div>Тульская</div>
                            </div>
                            <div className={a.forma_bac_1_1}>
                            <div ><img src={img_1} alt="" /></div>
                            <div>14 мин</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={a.forma_bac}>
                    <div className={a.forma_bac_04}>
                        <h2>Forst</h2>
                        <div className={a.man_flex}>
                           <div  className={a.forma_bac_1_1}> <div className={a.man_color}></div>
                            <div>Тульская</div>
                            </div>
                            <div className={a.forma_bac_1_1}>
                            <div ><img src={img_1} alt="" /></div>
                            <div>14 мин</div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



<Footer/>
        </div>
    )
}

export default Comer