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
            </React.Fragment>
        )
    }
}

export default People;