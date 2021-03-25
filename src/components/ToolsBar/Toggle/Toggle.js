import classes from './Toggle.module.css';

const Toggle = props =>{
    return(
        <div className={classes.DrawerToggle} onClick={props.click}>
        <div></div>
        <div></div>
        <div></div>
    </div>)
}

export default Toggle;