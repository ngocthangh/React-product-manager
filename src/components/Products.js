import React, { Component, Fragment } from 'react';
import PaginationReact from './PaginationReact';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { pageCount: 20, perPage: 10, offset: 1 };
    }
    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.state.perPage);

        this.setState({ offset: offset }, () => {
            console.log(offset);
        });
    }
    render() {
        return (
            <Fragment>
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
                <PaginationReact/>
            </Fragment>
        );
    }
}

export default Products;