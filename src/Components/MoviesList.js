import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MoviesList () {

    const [moviesList, setMoviesList] = useState({});

    useEffect(()=>{
    const promisse = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')

    promisse.then((response) =>
    setMoviesList(response.data)

    )}
    ,[])

    return (
        <Select>
        Selecione o filme
        </Select>
    )
}

const Select = styled.h1`
    background-color: var(--color-background-app);
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-primary);
    font-size: 24px;
`

