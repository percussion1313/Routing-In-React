import React from 'react';
import { Link } from 'react-router-dom'

let Film = ({filmData}) => {
    return (
        
        <div>
            <div className="card-header bg-light m-4 col-6 d-flex mx-auto position-relative">
                <div className="card-body bg-dark text-white">{filmData.title}
                
                <Link key = {filmData} className="badge badge-light text-dark float-right" to={`/film/${filmData.id}`}>Details</Link> </div>
                
            </div>
        </div>
    )
}

export default Film