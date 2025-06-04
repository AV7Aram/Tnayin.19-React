import React from 'react'
import style from './SocialLinks.module.css'

const SocialLinks = () => {
    return (
        <ul className={style.socialLinks}>
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-tiktok"></i></a></li>
        </ul>
    )
}

export default SocialLinks