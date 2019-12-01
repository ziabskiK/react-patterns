import React, { Component } from 'react'
import axios from 'axios'
import CharacterCards from '../components/CharacterCards/CharacterCards'
import withHandleError from '../components/shared/hoc/withHandleError'
import withHandleLoading from '../components/shared/hoc/withHandleLoading'
import { compose } from 'recompose'



const API_URL = 'https://rickandmortyapi.com/api/character/';


const CharacterWithHandleErrorAndHandleLoading = compose(withHandleError, withHandleLoading)(CharacterCards);

export default class RickAndMorty extends Component {
    state = {
        characters: [],
        error: null,
        loading: true
    }

    componentDidMount() {
        axios.get(API_URL)
            .then(({ data: { results } }) => {
                setTimeout(() => {
                    this.setState({ characters: results, loading: false });
                }, 3000);
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    render() {
        const { characters, loading, error } = this.state;
        return (
            <CharacterWithHandleErrorAndHandleLoading characters={characters} error={error} loading={loading} />
        )
    }
}
