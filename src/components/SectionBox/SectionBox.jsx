import React from 'react'
import pre from '../../assets/per4.svg'
import BtnAct from '../BtnAct/BtnAct'
import './SectionBox.css'

const SectionBox = ({ courses }) => {

    return (
        <div className="section-box">
            <div className="section-info">
                <div className="courses-box active">
                    {
                        courses.map((course, idx) => {
                            return (
                                <div key={idx} className='course-item'>
                                    <a href="#">
                                        <img src={course.image} alt={course.direction} />
                                    </a>
                                    <h2>
                                        <a href="#">{course.direction}</a>
                                    </h2>
                                    <h3>Դասընթաց</h3>
                                    <BtnAct />
                                    <p>
                                        <span>{course.duration}</span>
                                        <span>{course.rent}</span>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <img src={pre} className='section-image'/>
        </div>
    )
}

export default SectionBox