import React, { Component } from 'react';
import axios from 'axios';

import '../css/style.css';

import { CartContext } from '../contexts/Cart';

export default class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('https://m6zsc.sse.codesandbox.io/products').then((res) => {
            this.setState({
                products: res.data
            });
        });
    }

    render() {
        const { products } = this.state;
        return (
            <div className='products off-set'>
                <div className='container'>
                    <h1>Products</h1>
                    <div className='row'>
                        { products.map((product, index) => (
                            <div key={index} className='col-sm-4 mb-4'>
                                <div className="card">
                                    <img src={ product.imageUrl } className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{ product.name }</h5>
                                        <p className="card-text">{ product.description }</p>
                                        <CartContext.Consumer>
                                            { ({ addToCart }) => 
                                                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                                                    Add to cart
                                                </button>
                                            }
                                        </CartContext.Consumer>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        );
    }
}