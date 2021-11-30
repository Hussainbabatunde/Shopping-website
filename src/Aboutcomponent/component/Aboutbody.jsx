import React from 'react';
import { Link } from 'react-router-dom';
import './Aboutheader.css';

function Aboutbody(){
    return(<div>
        <h1 className="header">About</h1>
        <hr></hr>
        <p className="level">The website is a project which is a shopping website where users can check out the products on the website and place their orders. The website has a shopping page where users can check the types of products available on the website, then when users click in viewing the website they can see the different types of the selected products available. The page which contains the selected type of product allows user to select the number of such products needed and add it to the shopping cart. The website also contains the contact details of the owner of the shopping website.</p>
        <p className="level1">When a product is selected , there is a navigation bar at the top of the page. On the top left corner it contains the shopping page of different products, contact details and what the website is about. To the top right corner there is a shopping cart where the selected number of products and the products is shown. </p>
        <Link to='/' className="toback"> Go back </Link>
    </div>);
}

export default Aboutbody;