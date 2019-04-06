import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from '../components/ProductItem';
import Products from '../components/Products';
import * as Actions from '../actions/index';

class ProductList extends Component {
    render() {
        return (
            <Products>
                { this.showProducts() }
            </Products>
        );
    }
    showProducts(){
        let result = null;
        console.log(this.props.products);
        if(this.props.products){
            result = this.props.products.map((product, index) => (
                <ProductItem key={product.id} product={product} index={index} onDeleteItem={this.onDeleteItem}/>
            ))
        }
        return result;
    }
    componentDidMount(){
        this.props.loadProducts();
    }
    onDeleteItem = (id) => {
        this.props.deleteProduct(id);
    }
}


const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        loadProducts: () => {
            dispatch(Actions.actListProducts());
        },
        deleteProduct: (id) => {
            dispatch(Actions.actDeleteProduct(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);