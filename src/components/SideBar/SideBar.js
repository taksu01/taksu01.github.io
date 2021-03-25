import styled from '@emotion/styled'
import {useState, Fragment, useEffect} from 'react';
import classes from './SideBar.module.css';
import NavItems from './NavItems/NavItems';

const SideBar = (props)=>{
    const [drawer, setDrawer] = useState([classes.SideBar, classes.Close]);
    useEffect(()=>{
        if(props.open){
            setDrawer(
                [classes.SideBar, classes.Open]
            )
        }
        else{
            setDrawer(
                [classes.SideBar, classes.Close]
            )
        }
        
    },[props.open])
    const Backdrop = styled.div`
        position: fixed;
        background-color: black;
        opacity: 100%;
        transition: transform 0.3s ease-out;
        width:100%;
        height:100%;
        opacity: 50%;
        top:0;
        z-index: 0;
    `   
    return(
        <Fragment>
            <div className={drawer.join(' ')} onClick={props.click}>
                <nav>
                    <NavItems/>
                </nav>
            </div>
            <Backdrop className={drawer[1]} onClick={props.click}/>
        </Fragment>
    )
}

export default SideBar;