import React from 'react';
import { useState, useEffect } from 'react';
import PokemonCard from '../PokemonCard/PokemonCard'
import './PokemonCardsSection.css'

const PokemonCardsSection = (data) => {
    const [poke, setPoke] = useState([]) /* pokemons Array */
    const [filteredPoke, setFilteredPoke] = useState([])

    const [page, setPage] = useState(0);
    
    const [firstSearchFrame, setFirstSearchFrame] = useState(0)
    const [secondSearchFrame, setSecondSearchFrame] = useState(20)

    async function getPoke(){
        const responce = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')/* change to url localhost */
        const data = await responce.json()
        setPoke(data.results)
        setFilteredPoke(data.results)
        /* setPoke(data) -> props: data.name, id, img, ... */
    }

    function filter(filter){
        const filtered = poke.filter((element) =>
        element.name.toLowerCase().includes(filter.data.toLowerCase()))

        filter.data === '' ? setFilteredPoke(poke) : setFilteredPoke(filtered)
    }

    function nextPageHandle(){
        if(filteredPoke.length > secondSearchFrame)
            setFirstSearchFrame(firstSearchFrame + 20)
            setSecondSearchFrame(secondSearchFrame + 20)
    }

    function previousPageHandle(){
        if(firstSearchFrame >= 20){
            setFirstSearchFrame(firstSearchFrame - 20)
            setSecondSearchFrame(secondSearchFrame - 20)
    }
    }

    

    useEffect(() => {
        getPoke()
        setFilteredPoke(poke)
    }, [])
    
    useEffect(() => {
        filter(data)
        setPage(1)
    }, [data])

    useEffect(() => {
    })


    return (
        <>
          <div className='pagination-container'>
                <button onClick={nextPageHandle}>next page</button>
                <button onClick={previousPageHandle} >previous page</button>
            </div>
            {filteredPoke.length > 0 ? (<div className='pokemon-cards-list'>   
            {filteredPoke?.slice(firstSearchFrame, secondSearchFrame).map((pok)=>
                (pok.index === 0 ? (null) : <PokemonCard pokemonData = {pok} />)
            )}
            </div>) : (<h1>NoNe</h1>)}
        </>
    );
};

export default PokemonCardsSection;