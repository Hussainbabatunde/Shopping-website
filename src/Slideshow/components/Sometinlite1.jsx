import React, {useState} from 'react';
import { useStateValue } from './StateProvider';
import './bodywork.css';

function Sometinlite1({ image1}){
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

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                
                title: 'Water Bottle',
                image: image1,
                price: '$100',
            }
        })
    };

    return(<div>
         <section>
        <p class="num1">By Hussain Babatunde</p>
        <p class="num2">Water bottle</p>
        <p class="num3">$100</p>
        <p class="num4">Procured from its pristine aquifer located deep beneath the Fuji volcanic belt, it has a distinctive yet subtle flavor.</p>
        <hr class="hr1" />
        <form>
        <a class="minus" onClick={buttonClick}>-</a>
        <input type="text" value={count} id="val" />
        <a class="plus" onClick={buttonClick1}>+</a>
        <hr class="hr2" />
        <button class="button3" type="submit" onClick={addToBasket}>ADD TO CART</button>
        </form>
    </section>
    </div>);
}

export default Sometinlite1;