import React, {useState} from 'react';
import slideImages2 from './Slideimages2';
import './bodywork.css';


function Imagebiss2(){
const [current, setCurrent]= useState(0)
const length = slideImages2.length

function createSlide(slideImages2, index){
    return (<div className={index===current?'slideImages2 active' : 'slideImages2'} key={index}>
    {index===current && (<img src={slideImages2.image} alt="vase"  class="display1 fade" id="change" />)}
    </div>);
}
 
const plusSlides= ()=>{
    setCurrent(current === length - 1 ? 0 : current + 1)
}


const minusSlides= ()=>{
    setCurrent(current === 0 ? length - 1 : current - 1)
}

if(!Array.isArray(slideImages2) || slideImages2.length <= 0){
    return null;
}


    return(<div>
         <section>
        <button class="movement1" onClick={minusSlides}>Prev</button>
        <div class= 'slideshow-container'>
        {slideImages2.map(createSlide)}
        </div>
        <button class="movement2" onClick={plusSlides}>Next</button>
    </section>
    </div>);
}

export default Imagebiss2;