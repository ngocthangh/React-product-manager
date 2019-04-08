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
        path: '/products/detail/:id',
        exact: false,
        component: ({location, history})=><ProductDetail location={location} history={history}/>
    },{
        path: '/products/:id/edit',
        exact: false,
        component: ({location, history})=><ProductActionPage location={location} history={history}/>
    },{
        path: '/products/add',
        exact: false,
        component: ({history})=><ProductActionPage history={history}/>
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