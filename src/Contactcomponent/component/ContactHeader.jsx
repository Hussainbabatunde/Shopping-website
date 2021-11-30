import React from 'react';
import img from './Hussain babatunde.png';
import { Link } from 'react-router-dom';
import './contactheader.css';


function ContactHeader(){

    return(<div>
    <h1 className="header">Contact</h1>
    <hr></hr>
    <img src={img} alt=" Individual frame" className="picshaw"/>
    <p className="impulse">Name: Hussain babatunde</p>
    <p className="impulse">Email: hussainbabatunde@yahoo.com</p>
    <p className="impulse">Phone number: (+234) 08113671130</p>
    <p className="impulse">Linkledin: www.linkedin.com/in/babatunde-adekunle-9a1841134</p>
    <Link to='/' className="toback"> Go back </Link>
</div>);
}

export default ContactHeader;