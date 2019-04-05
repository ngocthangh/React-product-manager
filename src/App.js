import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Menu/>
                        {this.showPages()}
                    </div>
                </div>
            </Router>
        );
    }
    showPages(){
        let result = []
        result = routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} component={route.component}/>
        ))
        return (
            <Switch>{result}</Switch>
        )
    }
}

export default App;
