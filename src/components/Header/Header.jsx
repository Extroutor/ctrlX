import React from 'react';
import {AiOutlineMenu} from "react-icons/ai";
import img from '../../assets/icon/ico.png'
import CycloneSymbol from "../icons/CycloneSymbol";
import {GiStarCycle} from "react-icons/gi";

const Header = () => {
    return (
        <div className='header'>
            <div className='header__wrapper'>
                <div className="logo__title">
                    <div className='title'>CTRL</div>
                    <div className='logo'>
                        <GiStarCycle style={{width: '50px', height: '50px'}}/>
                    </div>
                </div>
                <div className='burger'>
                    <AiOutlineMenu style={{width: '50px', height:'30px', color: "white"}}/>
                </div>
            </div>

        </div>
    );
};

export default Header;