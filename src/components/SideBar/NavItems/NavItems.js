import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem.js';

const NavItems = (props) => {
    console.log('The nav render')
    const RefereshPage = ()=>{
        window.location.reload(false);

    }
    return (
    <ul className={classes.NavigationItems}>
        <NavItem link="/" active><h4>Pokemons</h4></NavItem>
        <NavItem link="/MyPokemons"><h4>My Pokedex</h4></NavItem>
    </ul>)
};

export default NavItems;