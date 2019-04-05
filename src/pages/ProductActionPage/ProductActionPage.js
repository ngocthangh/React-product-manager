import React, { Component } from 'react';
import './ProductActionPage.css';

class ProductActionPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form>
                        <legend className="text-center">Thêm Sản Phẩm</legend>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Sản Phẩm</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Hình Ảnh</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Giá</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Số Lượng Tồn</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label for="">Loại Sản Phẩm</label>
                            <select className="form-control" name="" id="">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Hiển Thị</label>
                        </div>

                        <div className="submit-button">
                            <button type="submit" className="btn btn-primary">Lưu</button>
                            <button type="submit" className="btn btn-warning">Hủy</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ProductActionPage;