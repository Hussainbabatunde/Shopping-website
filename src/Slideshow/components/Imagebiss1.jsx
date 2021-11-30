import React, {useState} from 'react';
import slideImages1 from './Slideimages1';
import './bodywork.css';


function Imagebiss1(){
const [current, setCurrent]= useState(0)
const length = slideImages1.length

function createSlide(slideImages1, index){
    return (<div className={index===current?'slideImages1 active' : 'slideImages1'} key={index}>
    {index===current && (<img src={slideImages1.image} alt="vase"  class="display1 fade" id="change" />)}
    </div>);
}
 
const plusSlides= ()=>{
    setCurrent(current === length - 1 ? 0 : current + 1)
}


const minusSlides= ()=>{
    setCurrent(current === 0 ? length - 1 : current - 1)
}

if(!Array.isArray(slideImages1) || slideImages1.length <= 0){
    return null;
}


    return(<div>
         <section>
        <button class="movement1" onClick={minusSlides}>Prev</button>
        <div class= 'slideshow-container'>
        {slideImages1.map(createSlide)}
        </div>
        <button class="movement2" onClick={plusSlides}>Next</button>
    </section>
    </div>);
}

export default Imagebiss1;