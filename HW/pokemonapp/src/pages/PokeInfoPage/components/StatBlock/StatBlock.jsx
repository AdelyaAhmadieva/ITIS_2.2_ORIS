import React, { useEffect, useState } from 'react';
import styles from './StatBlock.module.css'

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
       <>
       <div className={styles.stats_block}>
        <div className={styles.pokemon_stats_container}>
            <div className={styles.stats}>
                <h5 className='id-text'>{data.id}</h5>
                <h3 className="name-text">{data.name}</h3>
                <div className="stats-container">
                    <div className="HP-box">

                    </div>
                    <div className="ATTACK-box">

                    </div>
                    <div className="DEFENCE-box">

                    </div>
                    <div className="SPEED-box">

                    </div>
                </div>
            </div>
            <div className="images-block">
                <div className="elements-container">
                    {}
                </div>
                <div className="image-container">
                    <img className={styles.image} src={data?.sprites?.front_default} alt="none" />
                </div>

            </div>
        </div>
        <div>

        </div>
       </div>
       </>
        
    );
};

export default StatBlock;