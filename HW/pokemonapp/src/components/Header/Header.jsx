import React from 'react';
import './Header.css'
import pokeball from '../../images/pokeball.psd.png'
import search from '../../images/search-icon.png'
import Button from '../Button/Button';
const Header = ({handleInputChange}) => {

    return (
        <div className='header-container'>
            <img src={pokeball} alt="none" className='pokeball-image'/>
            <div className='search-container'>
                <h2>What pokemon you're looking for?</h2>
                <div className='input-container'>
                    <img src={search} alt="" />
                    <input type="text" className='input' onChange={handleInputChange}/>
                    <Button text = "GO"/>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;