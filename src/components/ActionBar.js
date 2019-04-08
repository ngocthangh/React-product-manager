import React, { Component } from 'react';
import { Fragment } from 'react';
import SearchBar from './SearchBar';
import Sort from './Sort';

class ActionBar extends Component {
    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SearchBar/>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <Sort/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ActionBar;