import React, { useState, useRef, useEffect } from 'react'
import per from '../../assets/per2.svg'
import './SectionDropbox.css'

const SectionDropbox = ({ advantages }) => {
    const [openIndex, setOpenIndex] = useState(null)
    const contentRefs = useRef([])

    useEffect(() => {
        contentRefs.current.forEach((ref, idx) => {
            if (ref) {
                ref.style.maxHeight = openIndex === idx ? ref.scrollHeight + "px" : null
            }
        })
    }, [openIndex])

    return (
        <div className="section-box">
            <img src={per} alt="" />
            <div className="section-info">
                <ul>
                    {advantages.map((item, idx) => (
                        <li className="dropbox item" key={idx}>
                            <div
                                className="dropbox-head"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                style={{ cursor: "pointer" }}
                            >
                                <div>
                                    <i className={item.icon}></i>
                                    <p>
                                        <span>{item.title}</span> {item.subtitle}
                                    </p>
                                </div>
                                <i className={`fas fa-chevron-down${openIndex === idx ? " activeI" : ""}`}></i>
                            </div>
                            <div
                                className="dropbox-collapse"
                                ref={el => contentRefs.current[idx] = el}
                                style={{
                                    overflow: "hidden",
                                    transition: "max-height 0.3s ease"
                                }}
                            >
                                <p>{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SectionDropbox