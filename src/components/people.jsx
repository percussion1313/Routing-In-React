import React, { Component } from 'react';
import People from './peopleID';


const PEOPLE_URL = 'https://ghibliapi.herokuapp.com/people/'

class Persons extends Component {
    constructor(props) {
        super(props)

        this.state = {
            people: [],
        }

        this.componentDidMount = () => {
            fetch(`${PEOPLE_URL}`)
                .then((results) => {
                    return results.json()
                }).then((data) => {
                    this.setState({
                        people: data
                    });
                })
        }
    }

    

    render() {
        let peopleCards = this.state.people.map((person) => {
            return <People key={person.id} peopleData={person} />
        }
    )
        return (
            <React.Fragment>
                <div>{peopleCards}</div>
            </React.Fragment>
        )
    }
}

export default Persons






