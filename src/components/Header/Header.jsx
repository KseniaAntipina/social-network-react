import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logoBlock}>
                <img src='https://u.netology.ngcdn.ru/backend/uploads/page_assets/images/file/1093/Flaticon.png'
                     alt={"лого"}/>
                <p>social network</p>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <><div className={s.loginBlockText}>{props.login}</div>  <button onClick={props.logout} className="btnDefault">Log out</button></>
                    : <NavLink to={'/login'} className="btnDefault">Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;