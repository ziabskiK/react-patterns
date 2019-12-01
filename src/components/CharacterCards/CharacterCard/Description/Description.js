import React from 'react'

const Description = ({ name, species, gender }) =>
    <div>
        <h4>
            {name}
        </h4>
        <p>
            Species: {species}
        </p>
        <p>Gender: {gender}</p>
    </div>

export default Description
