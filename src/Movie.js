import React, { useState } from 'react';

const Movie = ({name}) => {
    

    return (
        <div>
            <h3>{name.name}</h3>
            <h3>{name.price}</h3>
        </div>
    )
}

export default Movie;
