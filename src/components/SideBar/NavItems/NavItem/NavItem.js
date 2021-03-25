import classes from './NavItem.module.css';
import {NavLink} from 'react-router-dom'

const NavItem = ( props ) => (
    <li className={classes.NavItem}>
        <NavLink to={props.link} className={classes.NavItem} style={{textDecoration: 'none', fontSize:'20px'}}>
            {props.children}
        </NavLink>
 
    </li>
);

export default NavItem;