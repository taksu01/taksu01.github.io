import classes from './ToolsBar.module.css';
import React from 'react';
import Toggle from './Toggle/Toggle';
import SideBar from '../../components/SideBar/SideBar';
import {useState} from 'react';
const ToolsBar = props =>{
    const [showBar, setShowBar] = useState(false); 
    const showBarToggleHandler = () =>{
        setShowBar(
            !showBar
        );
    }

    return(
        <>
        <header className={classes['ToolsBar-header']}>
            <Toggle click={showBarToggleHandler} />
            <h1 className={classes.Title}>Welcome to your Pokedex</h1>
        </header>
        
        <SideBar open={showBar} click={showBarToggleHandler}/>
        </>
    );
}

export default ToolsBar;