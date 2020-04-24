import React, { Component } from 'react';
import './App.css';

import Home from './pages/Home';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CartProvider } from './contexts/Cart';

class App extends Component {
    render() {
        return (
            <CartProvider>
                <Router>
                    <div className="App">
                        <Navbar />
            
                        <Switch>
                            <Route path="/products">
                                <Products />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </CartProvider>
        );
    }
}

export default App;
