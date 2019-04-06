import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                    <Link type="button" className="btn btn-warning mr-10" to={{
                            pathname: `/products/${product.id}/edit`,
                            state: { product }
                        }}>Sửa</Link>
                    <button type="button" className="btn btn-danger" onClick={() => this.onDelete(product.id)}>Xóa</button>
                </td>
            </tr>
        );
    }
    onDelete(id) {
        // eslint-disable-next-line no-restricted-globals
        if(confirm('Bạn thực sự muốn xóa product này?')) {
            this.props.onDeleteItem(id);
        }
    }
}

export default ProductItem;