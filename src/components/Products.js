import React, { Component } from 'react';

class Products extends Component {
    render() {
        return (
            <table className="table mt-20" >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>ID</th>
                            <th>Hình Ảnh</th>
                            <th>Tên Sản phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng Tồn</th>
                            <th>Trạng Thái</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
        );
    }
}

export default Products;