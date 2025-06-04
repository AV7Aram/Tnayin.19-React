import React from 'react'
import logo from '../../assets/logo.png'
import idram from '../../assets/idram.png'
import card from '../../assets/card.png'
import SocialLinks from '../SocialLinks/SocialLinks'

import './Footer.css'

const Footer = ({ links, contacts }) => {
    return (
        <footer className='bg-silver'>
            <div className="container">
                <div className="footer-box">
                    <a href="#" className='footer-logo'>
                        <img src={logo} alt="" />
                    </a>
                    <p>Որակյալ ուսուցում, Անվճար պրակտիկա, Երաշխավորված աշխատանք</p>
                    <SocialLinks />
                </div>
                <div className="footer-box">
                    <h2>Ընկերություն</h2>
                    <ul className='option-category'>
                        {
                            links.map((link, idx) => {
                                return (
                                    <li key={idx}><a href="#">{link}</a></li>
                                )
                            })
                        }
                        <li className='footer-pay'>
                            <a href="#"><img src={idram} alt="" /></a>
                            <a href="#"><img src={card} alt="" /></a>
                        </li>
                    </ul>
                </div>
                <div className="footer-box">
                    <h2>Կապ մեզ հետ</h2>
                    <ul className='contact-info'>
                        {
                            contacts.map((contact, idx) => {
                                return (
                                    <li key={idx}>
                                        <a href="#"><i className={contact.icon}></i>{contact.data}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer