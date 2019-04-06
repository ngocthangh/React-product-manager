import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';


const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Về Chúng Tôi',
        to: '/about',
        exact: false
    },
    {
        name: 'Liên Hệ',
        to: '/contact',
        exact: true
    }
];

const MenuLink = ({label, to, exact}) => {
    return (
        <Route
            path={to}
            exact={exact}
            children={({match}) => {
                var active = match ? 'nav-item active' : 'nav-item';
                return (
                    <li className={active}>
                        <Link className='nav-link' to={to}>{label}</Link>
                    </li>
                )
            }}
        />
    )
}

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="http">Products Manager</a>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        { this.showMenus() }
                    </ul>

                </div>
                <Link className="btn btn-primary" to='/products/add'>Thêm Sản Phẩm</Link>
            </nav>
        );
    }
    showMenus() {
        return menus.map((menu, index) => (
            <MenuLink key={index} label={menu.name} to={menu.to} exact={menu.exact}/>
        ))
    }
}


export default Menu;