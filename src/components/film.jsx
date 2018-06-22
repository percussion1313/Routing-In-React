import React, { Component } from 'react';


import { BrowserRouter as Link } from 'react-router-dom'


const FILM_URL = 'https://ghibliapi.herokuapp.com/films'

class Film extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
        }
    }

    componentDidMount = () => {
        fetch(`${FILM_URL}`)
            .then((results) => {
                return results.json()
            }).then((res) => {
                this.setState({
                    data: res
                });
            })
    }


    render() {

        return (
            <React.Fragment>
                {this.state.data.map((res) => {
                    return (
                        <div className="card-header bg-light m-4 rounded-0 shadow col-md-6 d-flex mx-auto" key={res.id}>
                            <div className="card-body bg-dark text-white rounded-0 shadow">{res.title}
                                <Link to={`/film/${res.id}`}>
                                    <button className="btn btn-light text-dark float-right rounded-0" >Details</button>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default Film

