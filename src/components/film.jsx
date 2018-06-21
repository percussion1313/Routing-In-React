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
                {this.state.data.map(function (res) {
                    return (
                            <div className="card bg-light m-4 rounded-0 shadow" key={res.id}>
                                <div className="card-header bg-dark text-white rounded-0 shadow bottom-0">{res.title}</div>
                            </div>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default Films

