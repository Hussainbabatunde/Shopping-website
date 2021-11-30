import React from 'react';
import ShopNavbar from './component/ShopNavbar';
import Showing1 from './component/Showing1';
import neededinfo from './component/neededinfo';
import './App.css';

function createShow(neededinfo){
  return <Showing1 key={neededinfo.id} image={neededinfo.imgURL} items={neededinfo.item} prices={neededinfo.price} view={neededinfo.view}/>
}

function Shop() {
  return (
    <div className="App">
    <ShopNavbar />
    {neededinfo.map(createShow)}
    </div>
  );
}


export default Shop;