import React, { Component } from 'react';
import './ProductDetail.css';

class ProductDetail extends Component {
    render() {
        let { location } = this.props
        let product = null;
        if(location) {
            product = location.state.product;
        }
        return (
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <img className="product-image" src={product.image} alt="product" />
                </div>

                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <h2>{ product.name }</h2>
                    <h5>Giá: { product.price }</h5>
                    <h5>Số lượng tồn: { product.stock }</h5>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" readOnly checked={ product.display }/>
                        <label className="form-check-label">Hiển Thị</label>
                    </div>
                </div>

            </div>
        );
    }
}

export default ProductDetail;