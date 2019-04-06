import React, { Component } from 'react';
import './ProductActionPage.css';
import * as Actions from '../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            image: '',
            price: '',
            stock: '',
            kind: '',
            display: true};
    }
    componentDidMount(){
        let { location } = this.props;
        console.log(location);
        if(location && location.state.product) {
            this.setState(location.state.product);
        }
    }
    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    saveProduct = () => {
        if(this.state.id){
            console.log(this.state)
            this.props.updateProduct(this.state);
        } else {
            this.props.addProduct(this.state);
        }
        let { history } = this.props;
        history.push('/');
    }
    render() {
        let { name, image, price, stock, display } = this.state;
        return (
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form>
                        <legend className="text-center">Thêm Sản Phẩm</legend>
                        <div className="form-group">
                            <label htmlFor="name">Sản Phẩm</label>
                            <input type="text" className="form-control" name="name" value={name} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Hình Ảnh</label>
                            <input type="text" className="form-control" name="image" value={image} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Giá</label>
                            <input type="text" className="form-control" name="price" value={price} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="stock">Số Lượng Tồn</label>
                            <input type="text" className="form-control" name="stock" value={stock} onChange={this.onChange}/>
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="kind">Loại Sản Phẩm</label>
                            <select className="form-control" name="" name="kind" value={kind} >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div> */}
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" name="display" checked={display} onChange={this.onChange}/>
                            <label className="form-check-label" htmlFor="display">Hiển Thị</label>
                        </div>

                        <div className="submit-button">
                            <button type='button' className="btn btn-primary form-action" onClick={this.saveProduct}>Lưu</button>
                            <Link to='/' className="btn btn-warning form-action">Hủy</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addProduct: (product) => {
            dispatch(Actions.actAddProduct(product));
        },
        updateProduct: (product) => {
            dispatch(Actions.actUpdateProduct(product));
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductActionPage);