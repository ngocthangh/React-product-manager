import React, { Component } from 'react';
import './ProductDetail.css';

class ProductDetail extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <img className="product-image" src="http://lorempixel.com/640/480/abstract/" alt="product" />
                </div>

                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <h2>Samsung Galaxy note 7 edge</h2>
                    <h5>Giá: 15000000</h5>
                    <h5>Số lượng tồn: 50</h5>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label">Hiển Thị</label>
                    </div>
                </div>

            </div>
        );
    }
}

export default ProductDetail;