import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        let {product, index} = this.props;
        let labelElm = product.stock > 0 ? <span className="badge badge-success">Còn Hàng</span> :
                                            <span className="badge badge-warning">Hết Hàng</span>
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <th>
                    <img className="table-img" src={product.image} alt={product.name} />
                </th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{labelElm}</td>
                <td>
                    <button type="button" className="btn btn-warning mr-10">Sửa</button>
                    <button type="button" className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;