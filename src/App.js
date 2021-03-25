import Pokemons from './components/Pokemons/Pokemons';
import Layout from './container/Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import MyPokemons from './components/MyPokemons/MyPokemons';
import { Fragment } from 'react';
import UserData from './context/user-data';

const App =()=> {
  let _MyPokemons ={

  };
  if(localStorage.getItem('MyPokemons')===null ||localStorage.getItem('MyPokemons')===undefined){
    localStorage.setItem('MyPokemons', JSON.stringify(_MyPokemons));
  }
  else{
    _MyPokemons = JSON.parse(localStorage.getItem('MyPokemons'));
  }
  const routes = {
    "/": () => <Pokemons  />,
    "/MyPokemons": () => <MyPokemons />,
  };
  return (
  <Fragment>
      <Layout>
        <UserData.Provider value={{hasData:true,pokedex:_MyPokemons}}>
          <Switch>
            <Route exact path='/' render={props => <Pokemons {...props} />} />
            <Route path='/MyPokemons' render={props => <MyPokemons {...props} />} />
          </Switch>
        </UserData.Provider>
      </Layout>
    </Fragment>   
  );
}

export default App;
