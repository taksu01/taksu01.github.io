import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import classes from './Pokemon.module.css';
const Pokemon = (props)=>{
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

    return(
        <Fragment>
            {pokemon.dataFetch ?
            <div onClick={props.click} className={`${classes.Pokemon} ${pokemon.type}`}>
                <h2>{pokemon.name}</h2>
                <img style={{width:'100px', height:'100px', marginTop:'10px'}} rel="preload" src={pokemon.image} alt=""/>     
                <p> {pokemon.type}</p>  
            </div>: null
            }
        </Fragment>
    );
}

export default Pokemon;