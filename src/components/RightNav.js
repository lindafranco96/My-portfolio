import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const RightNav = ({ open }) => {
    return (
        <RightMenu open={open}>
            <NavLink to="/" exact={true}>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/projects">Projects</NavLink>
        </RightMenu>
    );
}

const RightMenu = styled.div`
    @media screen and (max-width: 770px) {
        z-index: -1;
        display: flex;
        width: 100%;
        height: 100%;
        background-color: #912f56;
        flex-direction: column;
        align-items: center;
        top: 0;
        right: 0;
        justify-items: center;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: transform 0.3s ease-in-out;
       
        a {
            text-decoration: none;
            font-size: 30px;
            font-weight: 600;
            text-transform: uppercase;
            padding: 20px;
            margin: 30px;
            align-items: center;
            justify-content: center;
            color: #17bebb;
            transition: all .3s ease-in-out;
        }

        a:hover {
            color: #f2f2f2;
        }

        a.active {
            border-bottom: 3px solid #f2f2f2;
            padding-bottom: 1px;
            color: #f2f2f2;
        }
    }

    @media screen and (min-width: 770px) {
        display: none;
    }
`

export default RightNav;
