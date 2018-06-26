import React, { Component } from 'react';
import Film from './filmID';


const FILM_URL = 'https://ghibliapi.herokuapp.com/films/'

class Films extends Component {
    constructor(props) {
        super(props)

        this.state = {
            films: [],
        }

        this.componentDidMount = () => {
            fetch(`${FILM_URL}`)
                .then((results) => {
                    return results.json()
                }).then((data) => {
                    this.setState({
                        films: data
                    });
                })
        }
    }

    

    render() {
        let filmCards = this.state.films.map((film) => {
            return <Film key={film.id} filmData={film} />
        }
    )
        return (
            <React.Fragment>
                <div>{filmCards}</div>
            </React.Fragment>
        )
    }
}

export default Films




