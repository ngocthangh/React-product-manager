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
        let { products } = this.props;
        console.log(this.props.products);
        if(products){
            let searchProducts = this.search(products);
            let sortProducts = this.sort(searchProducts);
            console.log(sortProducts)
            result = sortProducts.map((product, index) => (
                <ProductItem key={product.id} product={product} index={index} onDeleteItem={this.onDeleteItem}/>
            ))
        }
        return result;
    }
    search_sort() {
        let { products } = this.props;
        let resSearch = this.search(products);
        let resSort = this.sort(resSearch);
        return resSort;
    }
    search(products) {
        let result = products;
        let { searchKey } = this.props;
        console.log(searchKey);
        if(searchKey !== '') {
            result = products.filter(product => product.name.toLowerCase().indexOf(searchKey.toLowerCase()) >= 0);
        }
        return result;
    }
    sort(products) {
        let { sort } = this.props;
        let result = products.sort((p1, p2) => p1[sort.by] > p2[sort.by] ? sort.value: -sort.value);
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
        products: state.products,
        searchKey: state.search,
        sort: state.sort
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