import React, { Component } from 'react'

let peopleURL = 'http://ghibliapi.herokuapp.com/people/'
class Singleperson extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        let url =  peopleURL + this.props.match.params.id;
        fetch(url)
        .then(response => response.json())
        .then((data) => this.setState({people: data}))
    }

    render() {
        return (
        <div>
            <h5 className=" display-4 card-title col-12 mt-4 ">{this.state.people.name}</h5><hr></hr>
            <div className="card-body">Age: {this.state.people.age}</div>
            <div className="card-body">Gender: {this.state.people.gender}</div>
            <div className="card-body">Hair Color: {this.state.people.hair_color}</div>

        </div>
        )
    }
}


export default Singleperson