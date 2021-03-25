import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem.js';

const NavItems = (props) => {
    console.log('The nav render')
    return (
    <ul className={classes.NavigationItems}>
        <NavItem link="/" active>Home</NavItem>
        <NavItem link="/MyPokemons">My Pokemons</NavItem>
    </ul>)
};

export default NavItems;