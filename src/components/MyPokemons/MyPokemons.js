import MyPokemon from './MyPokemon/MyPokemon'
import classes from './MyPokemons.module.css';
import styled from '@emotion/styled'
import UserData from '../../context/user-data';
import React, {useContext, useEffect, useState} from 'react';
const MyPokemons = () =>{
    const [removed, setRemoved] = useState(false);

    useEffect(()=>{
        setRemoved(false);
    }, [removed])
    let contextUser = useContext(UserData);

    const removePokemonHandler = (pokemonName, index)=>{
        console.log(pokemonName+ ' '+ index);
        let MyPokedex= {...contextUser.pokedex};
        MyPokedex[`${pokemonName}`].splice(index, 1);
        localStorage.setItem('MyPokemons', JSON.stringify(MyPokedex));
        contextUser.pokedex = {...MyPokedex}
        alert('Pokemon Removed!');
        setRemoved(true);
    }
    const MyPokemonsList = styled.div`
        display:flex;
        justify-contet: space-between;
        flex-wrap:wrap;
        padding:10px;
    `
    const GetItem = JSON.parse(localStorage.getItem("MyPokemons"));
    const GetPokemon = Object.keys(GetItem).map((key, x) => {
            return(
                GetItem[key].map((Pokemon, i)=>{
                    return(
                    <MyPokemon data={Pokemon} remove={removePokemonHandler.bind(this,key,i)} pokeType={key} key={`mypok_${i}`}/>);
                })
            );
    });
    return(
        <div className={classes.MyPokemon}>
            <h2>My Page</h2>
            <MyPokemonsList>
                {GetPokemon}
            </MyPokemonsList>
            
        </div>
    )
}

export default MyPokemons;