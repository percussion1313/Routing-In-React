import React, { Component } from 'react';


const FILM_URL = 'https://ghibliapi.herokuapp.com/films'

class Films extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
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
                            <div className="card-header bg-light m-4 rounded-0 shadow col-md-6 d-flex mx-auto position-relative" key={res.id}>
                                <div className="card-body bg-dark text-white rounded-0 shadow bottom-0">{res.title}<a F className="badge badge-light text-dark float-right">Details</a></div>
                            </div>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default Films

