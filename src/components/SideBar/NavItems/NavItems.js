import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem.js';

const NavItems = (props) => {
    return (
    <ul className={classes.NavigationItems}>
        <NavItem link="/" active><h4>Pokemons</h4></NavItem>
        <NavItem link="/MyPokemons"><h4>My Pokedex</h4></NavItem>
    </ul>)
};

export default NavItems;