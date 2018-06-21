import React from 'react';


const FilmID = (props) => {
    return (
    
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">{props.id.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Release Date: {props.id.release_date}</h6>
            <p class="card-text">{props.id.description}</p>
        </div>
      </div >
    )
   
}

export default FilmID
