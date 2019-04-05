import React, { Component } from 'react';
import './HomePage.css';
import ProductList from '../../containers/ProductList';
import { Fragment } from 'react';

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <form className="form-inline mt-20">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ProductList/>
            </Fragment>
        );
    }
}

export default HomePage;