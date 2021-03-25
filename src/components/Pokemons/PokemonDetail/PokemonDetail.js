import React, {useEffect, Fragment, useState} from 'react';
import classes from './PokemonDetail.module.css';
import styled from '@emotion/styled';


const PokemonDetail = (props)=>{
    
    const PContainer = styled.div`
        text-align:center;
        margin:auto;
        flex: 1 1 100%;
    `
    const PDetailContainer = styled.div`
        display:flex;
        flex-wrap: wrap;
        justify-content: space-around;
    `
    const PDetailMoves = styled.div`
        display: 1 1 20%;
        margin:4px;
        min-width:120px;
        border: 1px solid black;
        padding:5px;
        color:white;
        text-shadow: 2px 2px #3b3a3a;
        text-transform: capitalize;
    `
    const PDetailTypes = styled.div`
        textAlign:center;
        margin:10px;
        color:white; 
        text-transform:capitalize;
        display: inline-block;
        min-width:120px;
    `

    const PCatch = styled.button`
        display:block;
        margin:auto;
        width:90px;
        height:90px;
        margin-top:10px;
        margin-bottom:10px;
    `
    const dispTypes = props.data.types.map((type, i)=>{
        return(
            <PDetailTypes className={type.type.name} key={`type_${i}`} >
                    {type.type.name}
            </PDetailTypes>
        )
    })
    const dispForms = props.data.moves.map((move,i)=>{
        return(
            <PDetailMoves className={props.data.types[0].type.name} key={`move_${i}`}>
               {move.move.name}
            </PDetailMoves>
        )
    })
    
    return(
        <PContainer>
            <div className={props.data.types[0].type.name}>
                <img style={{
                    width: '50%',
                    height: '50%'
                }} rel='preload' src={props.data.image} alt=''/>
                <h2 className={classes.Name}>{props.data.name}</h2>
            </div>
            <div>
                <PCatch onClick={()=>props.capture(props.data.name)}>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg'}/>
         
                </PCatch>
                {dispTypes}
                
                <h3>Moves</h3>
                <PDetailContainer>
                    {dispForms}
                </PDetailContainer>
            </div>
            <div>
                
                <button onClick={props.back} style={{backgroundColor:'#d2f7f5', width:'100px'}}>Back</button>
            </div>
            
           
        </PContainer>
    )
}

export default PokemonDetail;