import classes from './ToolsBar.module.css';
import React from 'react';
import Toggle from './Toggle/Toggle';
import SideBar from '../../components/SideBar/SideBar';
import {Fragment, useEffect, useState} from 'react';
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
        </header>
        <SideBar open={showBar} click={showBarToggleHandler}/>
        </>
    );
}

export default ToolsBar;