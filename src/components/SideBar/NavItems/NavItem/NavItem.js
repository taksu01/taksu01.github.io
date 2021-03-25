import classes from './NavItem.module.css';
import {Link, NavLink} from 'react-router-dom'

const NavItem = ( props ) => (
    <li className={classes.NavItem}>
        <NavLink to={props.link} className={props.active ? classes.active : null}>
            {props.children}
        </NavLink>
 
    </li>
);

export default NavItem;