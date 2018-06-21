import React from 'react';


const PeopleID = (props) => {
    return (
    
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">{props.id.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Release Date: {props.id.age}</h6>
            <h6 class="card-subtitle mb-2 text-muted">Release Date: {props.id.gender}</h6>
        </div>
      </div >
    )
   
}

export default PeopleID