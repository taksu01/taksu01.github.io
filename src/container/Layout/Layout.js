import {Fragment, useEffect, useState} from 'react';
import ToolsBar from '../../components/ToolsBar/ToolsBar';
import classes from './Layout.module.css';

import {BrowserRouter as Router} from 'react-router-dom';
const Layout = props=>{
   
    return(
        <Fragment> 
            <Router>
                <ToolsBar/>
                <main className={classes.Content}>
                    {props.children}
                </main>
            </Router>
        </Fragment>
    );
}

export default Layout;