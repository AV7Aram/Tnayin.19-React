import React from 'react'
import BtnMain from '../BtnMain/BtnMain'
import logo from '../../assets/logo.png'
import style from './Nav.module.css'
import styles from '../../styles/Container.module.css'

const Nav = ({ onNavClick }) => {
    return (
        <nav className={style.navTop}>
            <div className={styles.container}>
                <a href="#" className={style.navTopLogo}>
                    <img src={logo} alt="" />
                </a>
                <ul className={style.navTopMenu}>
                    <li><button onClick={onNavClick[0]}>Դասընթացներ</button></li>
                    <li><button onClick={onNavClick[1]}>Առավելություններ</button></li>
                    <li><button onClick={onNavClick[2]}>Թրեյներներ</button></li>
                    <li><button onClick={onNavClick[3]}>Մեր մասին</button></li>
                </ul>
                <BtnMain />
            </div>
        </nav>
    )
}

export default Nav