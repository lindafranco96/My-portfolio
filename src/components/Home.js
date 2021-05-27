import React from 'react'
import styled from 'styled-components'
import Resume from './../assets/LindaCV.pdf'
import theme from './../theme'
import portfolio from './../assets/img/Portfolio-img.svg'
import Social from './Social'

const Home = () => {
    return (
        <HomeContainer>
            <HomeDiv>
                <HomeInfo>
                    <Title3>Hello, my name is</Title3>
                    <Title1>Linda Franco</Title1>
                    <Title2>And I'm a Front-End Developer</Title2>
                    <a href={Resume} download="LindaCV">
                        Download Resume
                    </a>
                    <Social prop="start" />
                </HomeInfo>
                <Img>
                    <img src={portfolio} alt="portfolio-img" />
                </Img>
            </HomeDiv>

            <p>- If you want it, you will get it -</p>
        </HomeContainer>
    );
}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    p {
        padding-top: 3rem;
        font-size: 2rem;
        font-style: italic;
        font-weight: 600;
        color: ${theme.clrSecond};
        display: block;
    }

    @media screen and (max-width: 970px) {
        height: auto;
    }

    @media screen and (max-width: 715px) {
        text-align: center;
    }
`

const HomeDiv = styled.div`
    width: 85vw;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 970px) {
        flex-direction: column;
        width: 100%;
        margin-top: 7rem;
    }
`

const HomeInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;

    & > a {
        width: max-content;
        text-decoration: none;
        color: ${theme.clrWhiteDark};
        padding: 10px;
        background-color: ${theme.clrPinkDark};
        border-radius: 7px;
        margin: 10px 0;
        font-weight: 700;
        transition: all .3s ease;
    }

    & > a:hover {
        background-color: ${theme.clrSecond};
        transform: scale(1.05);
    }

    @media screen and (max-width: 970px) {
        align-items: center;
        width: 80%;
    }
`

const Img = styled.div`
    height: auto;
    width: 50%;

    img{
        width: 95%;
        display: block;
        height: auto;
        animation: ilustrationAnimate ease-in 1s infinite alternate;
    }

    @keyframes ilustrationAnimate {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.04);
        }
    }

    @media screen and (max-width: 970px) {
        img {
            width: 100%;
        }
    }
`

const Title1 = styled.h1`
    font-size: 4rem;

    @media screen and (max-width: 970px) {
        text-align: center;
        font-size: 3rem;
    }

    @media screen and (max-width: 715px) {
        font-size: 9.5vw;
    }
`

const Title2 = styled.h2`
    font-size: 2rem;

    @media screen and (max-width: 970px) {
        text-align: center;
    }

    @media screen and (max-width: 715px) {
        font-size: 6vw;
    }
`

const Title3 = styled.h3`
    font-size: 1rem;

    @media screen and (max-width: 970px) {
        text-align: center;
    }
`

export default Home;