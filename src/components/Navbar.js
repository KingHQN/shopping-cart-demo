import React, { Component } from 'react';

import { Link } from "react-router-dom";

import { CartContext } from '../contexts/Cart';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light" id="mainNav">
                <Link className="navbar-brand" to="/">React Bootstrap</Link>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div id='navbarSupportedContent' className='collapse navbar-collapse'>
                    <ul className='nav navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <Link to="/" className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/products" className='nav-link'>Products</Link>
                        </li>
                        <li className='nav-item'>
                            <CartContext.Consumer>
                                { ({ cartItems }) => 
                                    <Link to="/" className='nav-link'>
                                        Cart ({cartItems.length})
                                    </Link>
                                }
                            </CartContext.Consumer>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}