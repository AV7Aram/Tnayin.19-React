import React from 'react'
import style from './SectionStaff.module.css'

const SectionStaff = () => {
    return (
        <section className={style.bgSilver}>
            <div className={style.sectionTitle}>
                <h2>Դասընթաց<span>ավարներ</span></h2>
                <p>
                    Մեր փորձառու մասնագետները կմատուցեն Ձեզ բարդ թվացող ինֆորմացիան բավականին պարզեցված տեսքով:
                </p>
            </div>
        </section>
    )
}

export default SectionStaff