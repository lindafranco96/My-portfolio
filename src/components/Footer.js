import React from 'react'
import styled from 'styled-components'
import theme from './../theme'
import Social from './Social'

const Footer = () => {
    return (
        <FooterContainer>
            <Social />
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    background-color: ${theme.clrCoffee2};
    height: 5rem;
    width: 100%;
    margin-left:auto;
    margin-right: auto;
`

export default Footer;