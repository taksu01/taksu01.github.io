import axios from 'axios';
import { Fragment, useEffect, useState, useContext } from 'react';
import classes from './Pokemon.module.css';
import UserData from '../../../context/user-data';
import PropTypes from 'prop-types';

const Pokemon = (props)=>{
    let ownedPokemon = 0;
    const contextUser = useContext(UserData);
    const [pokemon, setPokemon]=useState({})
    useEffect(()=>{
        let isMounted = true;
        axios.get(props.url)
        .then(res=>{
            if(res.status===200){
                const data = res.data;
                setPokemon({
                    name: data.name,
                    image: data.sprites.other.dream_world.front_default,
                    type: data.types[0].type.name,
                    isLoading: false,
                    dataFetch:true
                });
            }
        })
        return () => { isMounted = false };
    },[]);
    if(pokemon.dataFetch){
        if(contextUser.pokedex.hasOwnProperty(pokemon.name)){
            ownedPokemon = contextUser.pokedex[`${pokemon.name}`].length
        }
    }
    return(
        <Fragment>
            {pokemon.dataFetch ?
            <div onClick={props.click} className={`${classes.Pokemon} ${pokemon.type}`}>
                <h2>{pokemon.name}</h2>
                <img style={{width:'100px', height:'100px', marginTop:'10px'}} rel="preload" src={pokemon.image} alt=""/>     
                <p> {pokemon.type}</p>  
                <p> Owned: {ownedPokemon}</p>  
            </div>: null
            }
        </Fragment>
    );
}
Pokemon.propTypes = {
    url: PropTypes.string.isRequired
}
export default Pokemon;