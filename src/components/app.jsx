import React, { Component, Fragment } from 'react';
import Home from './home.jsx'
import Films from './film.jsx'
import People from './people.jsx'
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
            <Link to="/characters"><button className="btn btn-outline-dark col-md-4 shadow rounded-0 mt-2">CHARACTERS</button></Link>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/films" component={Films}/>
                <Route exact path="/characters" component={People}/>
            </Switch>
        </Fragment>
    </Router>
    )
}
}


export default App;