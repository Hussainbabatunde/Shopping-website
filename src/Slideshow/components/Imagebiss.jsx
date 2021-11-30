import React, {useState} from 'react';
import slideImages from './Slideimages';
import './bodywork.css';


function Imagebiss(){
const [current, setCurrent]= useState(0)
const length = slideImages.length

function createSlide(slideImages, index){
    return (<div className={index===current?'slideImages active' : 'slideImages'} key={index}>
    {index===current && (<img src={slideImages.image} alt="vase"  class="display1 fade" id="change" />)}
    </div>);
}
 
const plusSlides= ()=>{
    setCurrent(current === length - 1 ? 0 : current + 1)
}


const minusSlides= ()=>{
    setCurrent(current === 0 ? length - 1 : current - 1)
}

if(!Array.isArray(slideImages) || slideImages.length <= 0){
    return null;
}


    return(<div>
         <section>
        <button class="movement1" onClick={minusSlides}>Prev</button>
        <div class= 'slideshow-container'>
        {slideImages.map(createSlide)}
        </div>
        <button class="movement2" onClick={plusSlides}>Next</button>
    </section>
    </div>);
}

export default Imagebiss;