import React from 'react';
import { Link } from 'react-router-dom'

let People = ({peopleData}) => {
    return (
        
        <div>
            <div className="card-header bg-light m-4 col-6 d-flex mx-auto position-relative">
                <div className="card-body bg-dark text-white">{peopleData.name}
                
                <Link key = {peopleData} className="badge badge-light text-dark float-right" to={`/people/${peopleData.id}`}>Details</Link> </div>
                
            </div>
        </div>
    )
}

export default People