import React, { Component, Fragment } from 'react';
import Home from './home'
import Filmcard from './mainfilm'
import People from './people'
import Singlefilm from './filmscreen'
import Singleperson from './personscreen'
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
                    <Link to="/films"><button className="btn btn-outline-dark col-md-4 shadow rounded-0 mt-2">FILMS</button></Link>
                    <Link to="/character"><button className="btn btn-outline-dark col-md-4 shadow rounded-0 mt-2">CHARACTERS</button></Link>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/films" component={Filmcard} />
                        <Route exact path="/character" component={People} />
                        <Route path="/film/:id"  component={Singlefilm}/>
                        <Route path="/people/:id"  component={Singleperson}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}


export default App;

