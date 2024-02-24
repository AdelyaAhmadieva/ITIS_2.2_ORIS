import React, { useEffect, useState } from 'react';

const StatBlock = (props) => {

    const [data, setData] = useState([])
    
    async function getInfo(){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
        const data = await response.json()
        setData(data)
    }

    useEffect(() =>{
        getInfo()
    }, [])
    
    return (
        <h1>e</h1>
        
    );
};

export default StatBlock;