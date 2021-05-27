import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import linda_logo from './../assets/img/linda_logo.svg'
import ButtonNav from './ButtonNav'
import theme from './../theme'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderNav>
                <NavLink to="/" exact={true}>
                    <Img>
                        <img src={linda_logo} alt="Linda-Logo" />
                    </Img>
                </NavLink>

                <Menu>
                    <NavLink to="/" exact={true}>Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/skills" >Skills</NavLink>
                    <NavLink to="/services" >Services</NavLink>
                    <NavLink to="/projects" >Projects</NavLink>
                </Menu>

                <ButtonNav />

            </HeaderNav>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    /* background-color: #912f56cc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: fixed; */
    /* position: absolute; */
    /*top: 0;
    right: 0;
    box-shadow: 0 0 10px 2px #912f56cc;
    /* padding: 0 30px; */
    /* background-color: theme.clrPinkDark; */
    /* background-color: ${theme.clrprimary9}; */
    background-color: rgba(185,59,109,.9);
    /* display: flex; */
    width: 100%;
    /* align-items: center; */
    /* justify-content: space-between; */
    position: fixed;
    padding: 5px 0;
    /* padding: 10px 30px; */
    height: 4.5em;
    z-index: 200;
`

const HeaderNav = styled.nav`
    width: 85vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Img = styled.div`
    /* padding-top: .5rem;
    padding-left: .8rem;
    margin-left: 30px;
    width: 100px;
    height: auto;  */
    /* overflow: hidden; */
    width: 3.8em;
    height: auto;
    /* margin-left: 2em; */
    text-decoration: none;

    img {
        width: 100%;
    }

    img:hover {
        cursor: pointer;
    }

    p {
        background-color: yellow;
        width: auto;
        text-decoration: none;
        outline: none;
    }
`

const Menu = styled.nav`
    a {
        /* color: cyan;
        /* padding: 5px 15px; */
        /*margin-right: 30px;
        font-size: 1em;
        color: #17bebb;
        text-decoration: none;
        font-weight: 600;
        text-transform: uppercase;
        transition: all .3s ease; */
        margin-left: 2.3em;
        font-size: 1.2rem;
        text-transform: capitalize;
        font-weight: 700;
        color: ${theme.clrSecond};
        text-decoration: none;
        transition: all .3s ease;
        padding-bottom: .3em;
    }

    a:hover {
        /* color: #f2f2f2;
        border-bottom: 3px solid #f2f2f2;
        padding-bottom: 3px; */
        /* padding: 0 3px 5px 3px; */
        color: ${theme.clrWhiteDark};
        border-bottom: 3px solid ${theme.clrWhiteDark};

    }

    a.active {
        /* border-bottom: 3px solid #f2f2f2;
        padding-bottom: 3px;
        color: #f2f2f2; */
        /* padding: 0 3px 5px 3px; */
        color: ${theme.clrWhiteDark};
        border-bottom: 3px solid ${theme.clrWhiteDark};
    }

    @media screen and (max-width: 770px) {
        display: none;
    }
`

export default Header;