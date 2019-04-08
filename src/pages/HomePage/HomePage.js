import React, { Component } from 'react';
import './HomePage.css';
import ProductList from '../../containers/ProductList';
import { Fragment } from 'react';
import ActionBar from '../../components/ActionBar';

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <ActionBar/>
                <ProductList/>
            </Fragment>
        );
    }
}

export default HomePage;