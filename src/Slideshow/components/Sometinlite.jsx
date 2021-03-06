import React, {useState} from 'react';
import './bodywork.css';

function Sometinlite(){
    const [count, setCount] = useState(0);
    function buttonClick1(){
        const count1 = count + 1;
        setCount(count1);
    }
    function buttonClick(){
        if (count<=0){
            setCount(count);
        }else{
        let count2 = count - 1;
        setCount(count2);
        }
    }

    return(<div>
         <section>
        <p class="num1">By Hussain Babatunde</p>
        <p class="num2">Flower Vase</p>
        <p class="num3">$150</p>
        <p class="num4">Piece of raw material, nature inspired. The Japandi culture, a mix of scandinavian and Japanese Art Deco with clean lines</p>
        <hr class="hr1" />
        <form>
        <a class="minus" onClick={buttonClick}>-</a>
        <input type="text" value={count} id="val" />
        <a class="plus" onClick={buttonClick1}>+</a>
        <hr class="hr2" />
        <button class="button3" type="submit">ADD TO CART</button>
        </form>
    </section>
    </div>);
}

export default Sometinlite;