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
            </React.Fragment>
        )
    }
}

export default Films