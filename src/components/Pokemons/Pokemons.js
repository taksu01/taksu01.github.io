import styled from '@emotion/styled';
import React, {useState, useEffect, useRef} from 'react';
import Pokemon from './Pokemon/Pokemon';
import PokemonDetail from './PokemonDetail/PokemonDetail';
import axios from 'axios';


const Pokemons = props =>{
    const [pokemons, setPokemon] = useState({
        result: [],
        nextAjax: '',
        prevAjax: '',
        isViewingDetail: false,
        detailUrl: '',
        isLoaded: false
    });
    const [pokemonDetail, setPokemonDetail] = useState({
        image:'Please wait',
        name:'Please wait',
        types:'Please wait',
        forms: 'Please wait',
        moves: 'Please wait'
    });
    const RenderView =  useRef(null);
    const RenderDetail = useRef(null);

    const PokemonList = styled.div`
        display:flex;
        justify-contet: space-between;
        flex-wrap:wrap;
        padding:10px;
    `
    const ButtonPagination = styled.button`
        transform: skew(20deg);
        min-width:100px;
        height:100;

        h4{
            transform: skew(-20deg);
        }
    `
    useEffect(()=>{
        console.log("Render first")
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(response =>{
            setPokemon({
                ...pokemons,
                result: [...response.data.results],
                nextAjax: response.data.next,
                prevAjax: response.data.previous,    
                isLoaded: true
          
            });
        })
    },[]);
    const pokemonClickHandler = (url) =>{
        console.log('Show Detail');
        RenderDetail.current = <p>Loading</p>
        RenderView.current = null;
        setPokemon({    
            result: [],
            nextAjax: '',
            prevAjax: '',
            isViewingDetail: false,
            detailUrl: '',
            isLoaded: false
        });
        axios.get(url)
        .then(response =>{
            const data = response.data;
            setPokemonDetail({
                image:data.sprites.other['official-artwork'].front_default,
                name:data.name,
                types: data.types,
                forms: data.forms,
                moves: data.moves
            });
            setPokemon({    
                ...pokemons,
                isViewingDetail:true,
                detailUrl: url
            });
    
        })
        
    }
    const backButtonHandler = () =>{
        setPokemon({
            ...pokemons,
            isViewingDetail:false,
            detailUrl: null
        });
        setPokemonDetail({});
    }
    const fetchNewListHandler = (url) =>{
        axios.get(url)
        .then(response =>{
            setPokemon({
                ...pokemons,
                result: [...response.data.results],
                nextAjax: response.data.next,
                prevAjax: response.data.previous
            });
            
        })
    }
    if(!pokemons.isViewingDetail && pokemons.result.length > 0){
        console.log('Show list');
        RenderView.current = (pokemons.result.map((pokemon, i) =>{
            return(
            <Pokemon click={pokemonClickHandler.bind(this, pokemon.url)}  name={pokemon.name} url={pokemon.url} key={`pokemon_${i}`}>
            </Pokemon>
            )
        }))
        return(
            <>
                <PokemonList>
                   {RenderView.current}
                
                </PokemonList>
                {!pokemons.isViewingDetail ? 
                    (<div style={{margin:'auto', textAlign:'center'}}>
                    <ButtonPagination onClick={()=>fetchNewListHandler(pokemons.prevAjax)} style={{float:'left', marginLeft:'20%', background:'white', color: '#f25555'}}><h4>Previous</h4></ButtonPagination>
                    <ButtonPagination onClick={()=>fetchNewListHandler(pokemons.nextAjax)}style={{float:'right',marginRight:'20%', background:'#f25555', color: 'white'}}><h4>Next</h4></ButtonPagination></div>):null
                }
                
             </>
        )
    }
    
    
    
    if(pokemons.isViewingDetail && pokemonDetail.types!== 'Please Wait'){
        return(
            <>
            <PokemonList>
      
            <PokemonDetail url={pokemons.detailUrl}  data={pokemonDetail} back={backButtonHandler} name={pokemonDetail.name}/>
            
            </PokemonList>
            </>
            )  
    }
    return(
        <div>
            <p>Loading... please wait</p>
        </div>
    )
}
export default Pokemons;