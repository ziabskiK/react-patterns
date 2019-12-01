import React from 'react'

const CharacterCard = ({ children }) => {

    return (
        <div className="card-wrapper">
            <div>
                {children}
            </div>
        </div>
    )
}

export default CharacterCard