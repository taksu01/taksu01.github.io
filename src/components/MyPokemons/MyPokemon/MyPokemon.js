import styled from '@emotion/styled'
import axios from 'axios';
import { useEffect, useState } from 'react';
const MyPokemon = props =>{
    const [pokemon, setPokemon]=useState({
        name:'',
        dataFetch: false
    })
    const MyPokemonD = styled.div`
        margin:10px;
        flex:1 1 40%;
        text-align:center;
        color:white;
        text-transform: capitalize;
        border-radius:25px;
    `
    const RemoveButton = styled.button`
        transform: skew(20deg);
        min-widh:100px;
        height:100;
        background:#f25555;
        h4{
            transform: skew(-20deg);
            color:white;
        }
    `
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokeType}`)
        .then(res=>{
            if(res.status===200){
                const data = res.data;
                setPokemon({
                    name: data.name,
                    image: data.sprites.other.dream_world.front_default,
                    type: data.types[0].type.name,
                    dataFetch:true
                });
            }
            else{
                setPokemon({
                    dataFetch:false
                });
            }
        })
        .catch((error)=>{
            
        })
    },[]);
    
    return(
        <>
        {pokemon.dataFetch ?
            <MyPokemonD className={`${pokemon.type}`}>
                <h2 style={{
                   margin: '0px',
                   marginTop: '10px'
                }}>{pokemon.name}</h2>
                <h4 style={{
                   margin: '0px'
                }}>"{props.data.name}"</h4>
                <img style={{width:'100px', height:'100px', marginTop:'10px'}} rel="preload" src={pokemon.image} alt=""/>     
                <p> {pokemon.type}</p>  
                <RemoveButton onClick={props.remove}><h4>Remove Pokemon</h4></RemoveButton>
            </MyPokemonD>:
            null
        }
        </>
    )
}

export default MyPokemon