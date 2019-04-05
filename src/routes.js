import React from 'react';
import HomePage from "./pages/HomePage/HomePage";
import ProductDetail from './pages/DetailPage/ProductDetail';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import About from './pages/AboutPage/About';
import Contact from './pages/ContactPage/Contact';
import NotFound from './pages/NotFound/NotFound';

const routes = [
    {
        path: '/',
        exact: true,
        component: ()=><HomePage/>
    },
    {
        path: '/products/:id',
        exact: false,
        component: ()=><ProductDetail/>
    },{
        path: '/products/:id/edit',
        exact: false,
        component: ()=><ProductActionPage/>
    },{
        path: '/products/add',
        exact: false,
        component: ()=><ProductActionPage/>
    },{
        path: '/about',
        exact: false,
        component: ()=><About/>
    },{
        path: '/contact',
        exact: false,
        component: ()=><Contact/>
    },{
        path: '',
        exact: false,
        component: ()=><NotFound/>
    }
];

export default routes;