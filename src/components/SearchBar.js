import React, { Component } from 'react';
import * as Actions from '../actions/index';
import { connect } from 'react-redux';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.searchKey = React.createRef();
    }
    render() {
        return (
            <form className="form-inline mt-20">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ref={this.searchKey}/>
                <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={this.onSearch}>Search</button>
            </form>
        );
    }
    onSearch = () => {
        let searchKey = this.searchKey.current.value;
        console.log(searchKey)
        this.props.searchProducts(searchKey);
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        searchProducts: (product) => {
            dispatch(Actions.actSearchProducts(product));
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);