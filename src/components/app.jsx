import React, { Component, Fragment } from 'react';
import Home from './home'
import Films from './film'
import People from './people'



import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

class App extends Component {
    super(props) {
        constructor(props)
    }


    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/"><button className="btn btn-outline-dark col-md-4 shadow rounded-0 mt-2">HOME</button></Link>
                    <Link to="/film"><button className="btn btn-outline-dark col-md-4 shadow rounded-0 mt-2">FILMS</button></Link>
                    <Link to="/character"><button className="btn btn-outline-dark col-md-4 shadow rounded-0 mt-2">CHARACTERS</button></Link>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/film" component={Films} />
                        <Route exact path="/character" component={People} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}


export default App;

