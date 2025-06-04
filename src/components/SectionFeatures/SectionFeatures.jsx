import React, { forwardRef } from 'react'
import SectionDropbox from '../SectionDropbox/SectionDropbox'
import BtnMain from '../BtnMain/BtnMain'
import style from './SectionFeatures.module.css'

const SectionFeatures = forwardRef(({ advantages }, ref) => {
    return (
        <section ref={ref} className={style.features}>
            <div className={style.container}>
                <div className={style.sectionTitle}>
                    <h2>Ինչո՞ւ սովորել <span>մեզ մոտ</span></h2>
                    <p>Մեզ մոտ ծրագրավորում սովորելը ձեռնտու է</p>
                </div>
                <SectionDropbox advantages={advantages} />
                <div className={style.sectionFoot}>
                    <BtnMain />
                </div>
            </div>
        </section>
    )
})

export default SectionFeatures