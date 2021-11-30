import React from 'react';
import {Link} from 'react-router-dom';
import tunde1 from './tunde1.jpg';
import './shopnav.css';

function ShopNavbar(){
    return(<div>
        <nav class="dropdown">
            <button onclick="dropdownfnc()" class="Menu">Menu</button>
            <div class="fixed" id="drop">
            <ul>
                <li><Link to='/about'>About</Link></li> 
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
            <img src={tunde1} alt="logo" class="image" />
            <div class="symbols">👤</div>
            <div class="symbols">👜</div>
        </nav>
        <hr />
    </div>);
}

export default ShopNavbar;