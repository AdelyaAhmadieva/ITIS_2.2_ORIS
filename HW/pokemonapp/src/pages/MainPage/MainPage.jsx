import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import PokemonCardsSection from './components/PokemonCardsSection/PokemonCardsSection';

const MainPage = () => {

    const [inputValue, setInputValue] = useState('')
    const [searchData, setSearchData] = useState('')

    useEffect(() =>{
        const timer = setTimeout(() => {
            setSearchData(inputValue)
        }, 100);
         return(() => clearTimeout(timer))
    }, [inputValue])

    function handleInputValueChange(e){
        setInputValue(e.target.value)
    }

    return (
        <div>
            <Header handleInputChange={ handleInputValueChange} />
            <PokemonCardsSection data = {searchData}/>
        </div>
    );
};

export default MainPage;