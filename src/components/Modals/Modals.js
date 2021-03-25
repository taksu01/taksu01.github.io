import React,  { useContext } from 'react';
import styled from '@emotion/styled';
import UserData from '../../context/user-data';
import {  keyframes } from '@emotion/react'
const Modals = ( props ) => {
    let contextUser = useContext(UserData);
    const ModalDiv = styled.div`
        position: fixed;
        background-color: #f25555;
        width: 70%;
        border: 1px solid #ccc;
        box-shadow: 1px 1px 1px black;
        padding: 16px;
        left: 15%;
        top: 30%;
        box-sizing: border-box;
        transition: all 0.3s ease-out;
    `
    const bounce = keyframes`
    from, 20%, 53%, 80%, to {
        transform: translate3d(0,0,0);
      }
    
      40%, 43% {
        transform: translate3d(0, -30px, 0);
      }
    
      70% {
        transform: translate3d(0, -15px, 0);
      }
    
      90% {
        transform: translate3d(0,-4px,0);
      }`

    const catchPoke = keyframes`
    from, 20%, 53%, 80%, to {
        transform: scale(1);
      }
      90% {
        transform: scale(2);
      }

    `
    const PCatch = styled.button`
        display:block;
        margin:auto;
        width:100px;
        height:90px;
        margin-top:10px;
        margin-bottom:10px;
        color:white;
        background-color:white;
        :hover{
            animation: ${bounce} 1s linear infinite;
        }
        :click{
            animation: ${catchPoke};
        }
        
    `
    const PClosed = styled.button`
        display:block;
        margin:auto;
        width:100px;
        margin-top:10px;
        margin-bottom:10px;
        color:black;
        background-color:white;
        
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
            <h1 style={{color:'white'}}>Catch this Pokemon!</h1>
            <PCatch onClick={throwPokeBallHandler}>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg'}/></PCatch>
            <br></br>
            <PClosed onClick={props.catchPokemonCancelHandler}>Closed</PClosed>
        </ModalDiv>
    </>
    )
};

export default Modals;