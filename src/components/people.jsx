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
                {this.state.data.map(function (res) {
                    return (
                            <div className="card bg-light m-4 rounded-0 shadow" key={res.id}>
                                <div className="card-header bg-dark text-white rounded-0 shadow col-md-4">{res.name}</div>
                            </div>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default People;