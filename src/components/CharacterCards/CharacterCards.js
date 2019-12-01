import React from 'react'
import CharacterCard from './CharacterCard/CharacterCard'
import ProfileImage from './CharacterCard/ProfileImage/ProfileImage';
import Description from './CharacterCard/Description/Description';


const CharacterCards = ({ characters }) => {

    return characters.map(({ name, image, species, gender }) => (

        <CharacterCard key={name}>
            <ProfileImage image={image} />
            <Description species={species} gender={gender} name={name} />
        </CharacterCard>
    ));
}

export default CharacterCards;
