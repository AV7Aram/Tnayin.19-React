import React from 'react'
import BtnMain from '../BtnMain/BtnMain'
import SocialLinks from '../SocialLinks/SocialLinks'
import headerImg from '../../assets/header.svg'
import style from './Header.module.css'
import styles from '../../styles/Container.module.css'

function Header() {
    return (
        <header className={style.headerMain}>
            <div className={styles.container}>
                <div className={style.headerInfo}>
                    <h1><span>Սովորի՛ր</span> ծրագրավորում<br /><span>Դարձի՛ր</span> պահանջված մասնագետ</h1>
                    <p>Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված աշխատանք։</p>
                    <div className={style.headerAction}>
                        <BtnMain />
                        <a href="#video" className={style.butPlay}>
                            <i className="far fa-play-circle"></i>
                            Տեսանյութ
                        </a>
                    </div>
                    <SocialLinks />
                </div>
                <img src={headerImg} alt="Header" className={style.headerImage} />
            </div>
        </header>
    )
}
export default Header