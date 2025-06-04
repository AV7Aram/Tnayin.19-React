import React from 'react'
import BtnMain from '../BtnMain/BtnMain'
import logo from '../../assets/logo.png'
import style from './Nav.module.css'
import styles from '../../styles/Container.module.css'

const Nav = () => {
    return (
        <nav className={style.navTop}>
            <div className={styles.container}>
                <a href="#" className={style.navTopLogo}>
                    <img src={logo} alt="" />
                </a>
                <ul className={[style.navTopMenu, style.active].join(' ')}>
                    <li><button>Դասընթացներ</button></li>
                    <li><button>Առավելություններ</button></li>
                    <li><button>Թրեյներներ</button></li>
                    <li><button>Մեր մասին</button></li>
                </ul>
                <BtnMain />
            </div>
        </nav>
    )
}

export default Nav