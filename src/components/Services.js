import React from 'react'
import styled from 'styled-components'
import ContainerTitle from './../assets/styles/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPenNib, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import theme from './../theme'

const Services = () => {
    return (
        <ServicesDiv>
            <ContainerTitle>
                <h1>My Services</h1>
                <p>- what I Offer -</p>
            </ContainerTitle>
            <ServicesContainer>
                <ServicesContent>
                    <FontAwesomeIcon icon={faCode} className="services__icon" />
                    <h3>Web Design</h3>
                    <p>This service that I offer is something that I have dedicated time to improve.</p>
                </ServicesContent>
                <ServicesContent>
                    <FontAwesomeIcon icon={faPenNib} className="services__icon" />
                    <h3>Logo Design</h3>
                    <p>This service that I offer is of high quality, and as you can see I did my own logo for this web page</p>
                    <p>In my free time a hobby I have is drawing.</p>
                </ServicesContent>
                <ServicesContent>
                    <FontAwesomeIcon icon={faMobileAlt} className="services__icon" />
                    <h3>Apps Design</h3>
                    <p>This service that I offer needs improvements and more experience and it's something that I'll achieve.</p>
                    <p>I can make responsive web pages that adapt to any device.</p>
                </ServicesContent>
            </ServicesContainer>
        </ServicesDiv>
    );
}

const ServicesDiv = styled.div`
    width: 85vw;
    margin-left: auto;
    margin-right: auto;
`

const ServicesContainer = styled.div`
    display: flex;
    min-height: 70vh;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
`

const ServicesContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 23rem;
    height: 25rem;
    margin: .5rem;
    padding: 1.5rem;
    text-align: center;
    justify-content: center;
    border: 3px solid ${theme.clrPinkDark};
    border-radius: .8rem;
    flex-wrap: wrap;

    .services__icon {
        font-size: 3rem;
        width: 50px;
        padding: .5rem;
        background-color: #912f56;
        color: #f2f2f2;
        border-radius: 50%;
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 1.25rem;
        color: ${theme.clrCoffee2};
        margin-bottom: .5rem;
    }

    p {
        padding: .5rem 1rem;
        font-weight: 500;
    }

    &, .services__icon, h3, p {
        transition: .5s;
    }

    &:hover {
        background-color: ${theme.clrPinkDark};
        box-shadow: 0 0 10px 3px ${theme.clrGrey5};
        transform: scale(1.05);
    }

    &:hover .services__icon {
        background-color: ${theme.clrWhiteDark};
        color: ${theme.clrPinkDark};
    }

    &:hover h3, &:hover p {
        color: ${theme.clrWhiteDark};
    }

    @media screen and (max-width: 1415px) {
        width: 19rem;
    }

    @media screen and (max-width: 1131px) {
        display: flex;
        width: 17rem;
    }

    @media screen and (max-width: 1019px) {
        width: 23rem;
        justify-content: center;
    }
`

export default Services;