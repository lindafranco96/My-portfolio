import React from 'react'
import styled from 'styled-components'
import ContainerTitle from './../assets/styles/Title'
// import mysql from './../assets/img/icons8-mysql-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
    return (
        <SkillsContainer>
            <ContainerTitle >
                <h1>My Skills</h1>
                <p>- what I know -</p>
            </ContainerTitle>
            <ContainerSkills>
                <SkillsInfo>
                    <h2>My creative skills & experiences.</h2>
                    <p>These are some skills that I have about web development, I have been improving them every time. I spend watching courses on the internet. </p>
                    <br />
                    <p>I find this work area very interesting and creative. I want to improve my skills more and more.</p>
                </SkillsInfo>
                <SkillsGroup>
                    <div className="skills">
                        <FontAwesomeIcon icon={faHtml5} className="icon"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faCss3Alt} className="icon"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faJsSquare} className="icon"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faReact} className="icon"></FontAwesomeIcon>
                    </div>
                </SkillsGroup>
            </ContainerSkills>
        </SkillsContainer>
    );
}

const SkillsContainer = styled.div`
    width: 85vw;
    margin-left: auto;
    margin-right: auto;
`

const ContainerSkills = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 905px) {
        flex-direction: column;
    }
`

const SkillsInfo = styled.div`
    width: 50%;
    align-items: center;

    h2 {
        letter-spacing: 3px;
        margin-bottom: 20px;
        font-weight: 600;
        color: #593821;
    }

    p {
        font-size: 20px;
        margin-right: 20px;
        color: #17bebb;
        font-weight: 500;
        padding-right: 20px;
    }

    @media screen and (max-width: 905px) {
        width: 100%;
        margin-bottom: 1.5rem;
        text-align: center;
    }
`

const SkillsGroup = styled.div`
    width: 50%;
    margin-left: auto;
    margin-right: auto;

    .skills {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .icon {
            color: #17bebb;
            transition: all .3s ease;
            width: 15em;
            height: 15em;
            margin: .5em;
        }

        .icon:hover {
            color: #912f56;

        }
    }

    @media screen and (max-width: 1215px) {
        width: 60%;
    }

    @media screen and (max-width: 1116px) {
        justify-content: space-around;
        width: 100%;
       
    }
`

export default Skills;