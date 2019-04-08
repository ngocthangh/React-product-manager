import React, { Component } from 'react';
import * as Actions from '../actions/index';
import { connect } from 'react-redux';

const sorts = [
    {
        name: 'Tên A-Z',
        sort: {
            by: 'name',
            value: 1
        },
        cl: 'fa fa-sort-alpha-asc pr-5'
    },{
        name: 'Tên Z-A',
        sort: {
            by: 'name',
            value: -1
        },
        cl: 'fa fa-sort-alpha-desc pr-5'
    },{
        name: 'Giá thấp-cao',
        sort: {
            by: 'price',
            value: 1
        },
        cl: 'fa fa-sort-numeric-asc'
    },{
        name: 'Giá cao-thấp',
        sort: {
            by: 'price',
            value: -1
        },
        cl: 'fa fa-sort-numeric-desc'
    },
];

class Sort extends Component {
    constructor(props){
        super(props);
        this.state={nameSort: 'Sort'}
    }
    render() {
        return (
            <div className="btn-group mt-20">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    { this.state.nameSort }
                </button>
                <div className="dropdown-menu">
                    { this.showSorts() }
                </div>
            </div>
        );
    }
    showSorts() {
        return sorts.map((sort, index) => {
            let s = this.props.sort;
            let cl = s.by === sort.sort.by && s.value === sort.sort.value ? 'sort_selected': '';
            return(<button key={index} 
                className={`dropdown-item ${cl}`} 
                onClick={ () => this.onSort(sort) }>
                    <span className={sort.cl}>
                        { sort.name }
                    </span>
                </button>)
        })
    }
    onSort(sort) {
        this.props.sortProducts(sort.sort);
        this.setState({nameSort: sort.name})
    }
    componentDidMount(){
        let s = this.props.sort;
        if (s) {
            for(let sort of sorts) {
                if(s.by === sort.sort.by && s.value === sort.sort.value) {
                    this.setState({nameSort: sort.name});
                    break;
                }
            }
        }
    }
}

const mapStateToProps = state => {
    return {
        sort: state.sort
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        sortProducts: (sort) => {
            dispatch(Actions.actSortProducts(sort));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);