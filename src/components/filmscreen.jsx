import React, { Component } from 'react'

let filmURL = 'http://ghibliapi.herokuapp.com/films/'
class Singlefilm extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        let url =  filmURL + this.props.match.params.id;
        fetch(url)
        .then(response => response.json())
        .then((data) => this.setState({films: data}))
    }

    render() {
        return (
        <div>
            <h5 className=" display-4 card-title col-12 mt-4 ">{this.state.films.title}</h5><hr></hr>
            <div className="card-body">Release Date: {this.state.films.release_date}</div>
            <div className="card-body">Director: {this.state.films.director}</div>
            <div className="card-body">Description: {this.state.films.description}</div>

        </div>
        )
    }
}


export default Singlefilm