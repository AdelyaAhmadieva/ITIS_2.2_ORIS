import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './PokemonCard.module.css'
import '../../../../typesColors.css'

const PokeCard = (props) => {
    const{name, url} = props.pokemonData;
    const [poke, setPoke] = useState({})
    const [typeArray, setTypeArray] = useState([])
    const [pokeImg, setPokeImg] = useState('')

    async function getPoke(){
        const response = await fetch(url)
        const data = await response.json()
        setPoke(data)
        setPokeImg(data.sprites.front_default)

    }

    function Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
        }

{/* поменять имя poke*/}
    useEffect(() =>{
        getPoke()
    }, [props])

    return (
        <Link to={`/pokemon/${name}`}>
            <div className={styles.pokemon_card}>
                <div className={styles.name_id_container}> 
                    <p>{poke?.name !== undefined ? (Capitalize(poke.name)) : (null) }</p>
                    <p>{poke?.id}</p>
                </div>
            
                <img src={pokeImg}  alt="not found" className={styles.pokemon_image}/>
               
                <div className={styles.types_container}>
                    {poke.types?.map((type) => (
                        <div className={` ${styles.type_box} element-type-${type.type.name}`}>
                            <p>{Capitalize(type.type.name)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default PokeCard;