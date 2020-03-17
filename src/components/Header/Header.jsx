import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import pictureLogo from '../../../assets/images/pictureLogo.jpg';

const Header = (props) => {
    return (<header className={s.header}>
        <div>
            
            }
        </div>
        <div className={s.logoPicture}>
            <img src={pictureLogo} />
        </div>

    </header>);
}

export default Header;