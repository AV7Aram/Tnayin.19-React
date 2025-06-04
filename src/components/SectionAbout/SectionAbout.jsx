import React, { forwardRef } from 'react'
import per from '../../assets/per3.svg'
import style from './SectionAbout.module.css'

const SectionAbout = forwardRef((props, ref) => {
    return (
        <section ref={ref} className={style.about}>
            <div className={style.container}>
                <div className={style.sectionTitle}>
                    <h2>Մեր <span>մասին</span></h2>
                    <p>Ընկերության գործունեության մասին</p>
                </div>
                <div className={style.sectionBox}>
                    <div className={style.sectionInfo}>
                        <p>SmartCode ծրագրավորման ուսուցման ընկերությունը արդեն 9 տարի է կազմակերպում և իրականացնում է ծրագրավորման դասընթացներ, նպատակ ունենալով աշխատաշուկային հանձնել որակյալ մասնագետներ:</p>
                        <p>Հետևելով համաշխարհային IT թրենդներին՝ թարմացվում և կատարելագործվում են դասավանդման ծրագրերը: Հատուկ մշակված ծրագրի արդյունքում մեր ուսանողները գրանցում են մեծ հաջողություններ: Հմուտ մասնագետների աշխատանքի արդյունքում մենք վայելում ենք մեր ուսանողների սերն ու վստահությունը:</p>
                        <p>Դու էլ միացի՛ր մեզ, դարձի՛ր մրցունակ ծրագրավորման ոլորտում SmartCode-ի օգնությամբ:</p>
                    </div>
                    <img src={per} className={style.sectionImage} />
                </div>
            </div>
        </section>
    )
})

export default SectionAbout