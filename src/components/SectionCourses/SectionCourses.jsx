import React from 'react'
import SectionBox from '../SectionBox/SectionBox'
import style from './SectionCourses.module.css'

const SectionCourses = ({ courses }) => {
    return (
        <section className={style.bgSilver}>
            <div className={style.container}>
                <div className={[style.sectionTitle, style.left].join(' ')}>
                    <h2>
                        Ծրագրավորման
                        <span> դասընթացներ</span>
                    </h2>
                    <p>
                        Ծրագրավորման դասընթացներ նախատեսված սկսնակների համար
                    </p>
                </div>
                <SectionBox courses={courses} />
            </div>
        </section>
    )
}

export default SectionCourses