import React, { Component } from 'react'

const PEOPLE_URL = 'https://ghibliapi.herokuapp.com/people'

class People extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount = () => {
        fetch(`${PEOPLE_URL}`)
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
                        <div className="row">
                            <div className="card-header bg-light m-4 col-6 d-flex mx-auto position-relative" key={res.id}>
                                <div className="card-body bg-dark text-white">{res.name}<a href="" className="badge badge-light text-dark float-right">
                                Details</a></div>
                            </div>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default People;