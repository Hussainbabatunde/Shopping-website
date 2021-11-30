import React from 'react';
import {Link} from 'react-router-dom';
import './showing1.css';

function Showing1(props){
    return(<div>
        <div className='all'>
            <img src={props.image} alt='bottle' className="img1" />
            <div className='datainfo'>
                <h2 className='item'>{props.items}</h2>
                <h3 className='price'>{props.prices}</h3>
                <p className="madeby">Made by Hussain Babatunde</p>
            </div>
            <Link to={props.view} className='toview'>View</Link>
        </div>
        <hr />
        </div>
    )
}

export default Showing1;