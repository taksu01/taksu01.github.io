import React,  { useContext } from 'react';
import styled from '@emotion/styled';
import UserData from '../../context/user-data';

const Modals = ( props ) => {
    let contextUser = useContext(UserData);
    const ModalDiv = styled.div`
        position: fixed;
        z-index: 500;
        background-color: white;
        width: 70%;
        border: 1px solid #ccc;
        box-shadow: 1px 1px 1px black;
        padding: 16px;
        left: 15%;
        top: 30%;
        box-sizing: border-box;
        transition: all 0.3s ease-out;
    `
    // const catchPokemonCancelHandler = () => {
    //     setCatchPokemon(false)
    // }
    const throwPokeBallHandler = () => {
        if(Math.random() < 0.5){
            captureHandler();
        }
        else{
            alert('Oh no you did not catch it, dont give up!');
        }
    }
    const insertPokemonToPokedex =(nickname, pokemonName)=>{
        if (!contextUser.pokedex.hasOwnProperty(pokemonName)) {
            contextUser.pokedex = {
                ...contextUser.pokedex,
                [`${pokemonName}`]:[{
                    name: nickname
                }]
            };
        }
        else{
            contextUser.pokedex[`${pokemonName}`].push({
                name: nickname
            });
        }
        localStorage.setItem('MyPokemons', JSON.stringify(contextUser.pokedex));
        alert('Pokemon added to Pokedex!');
        props.catchPokemonCancelHandler();
    }
    const captureHandler = () =>{
        let pokemonName = prompt('You succeed on capturing the Pokemon! Give it a name');
        if(pokemonName === "" || pokemonName === null ){
            alert('You need to give your pokemon a name!');
            captureHandler();
            return false;
        }
        pokemonName= pokemonName.normalize().toLowerCase().trim()
        
        for(const [key, value] of Object.entries(contextUser.pokedex)){
            for(const pokName of value){
                if(pokemonName === pokName.name.normalize().toLowerCase()){
                    alert('Pokemon with this name already exist');
                    captureHandler();
                    return false;
                }
            }
        }
        insertPokemonToPokedex(pokemonName,props.name.toLowerCase())
    }
    return(
    <>
        <ModalDiv
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
                zIndex: props.show ? '10' : '-10'
            }}>
            <p>Catch this Pokemon!</p>
            <button onClick={throwPokeBallHandler}>CATCH 50%</button>
            <button onClick={props.catchPokemonCancelHandler}>Closed</button>
        </ModalDiv>
    </>
    )
};

export default Modals;