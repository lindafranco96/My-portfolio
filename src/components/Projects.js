import React from 'react'
import styled from 'styled-components'
import ContainerTitle from '../assets/styles/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import Todo_List_App from './../assets/img/Todo-List-App.PNG'
import theme from './../theme'

const Projects = () => {
    return (
        <ProjectsDiv>
            <ContainerTitle>
                <h1>My Projects</h1>
                <p>- recent works -</p>
            </ContainerTitle>
            <ProjectsContainer>
                <ProjectContent>
                    <img src={Todo_List_App} alt="TodoList" />
                    <div className="works__data">
                        <div className="works__link-group">
                            <a href="https://lindafranco96.github.io/React-todo-list/" target="_blank" rel="noreferrer" className="works__link"><FontAwesomeIcon icon={faLink} className="projects__icon" /></a>
                            <a href="https://github.com/lindafranco96/React-todo-list" target="_blank" rel="noreferrer" className="works__link"><FontAwesomeIcon icon={faGithubSquare} className="projects__icon" /></a>
                        </div>
                        <span className="works__title">To-Do List</span>
                        <span className="works__description">
                            A todo list ready to add tasks to be done
                        </span>
                        <div className="works__description-makes">
                            <span>React</span>
                            <span>LocalStorage</span>
                            <span>Hooks</span>
                        </div>
                    </div>
                </ProjectContent>
            </ProjectsContainer>
        </ProjectsDiv>
    );
}

const ProjectsDiv = styled.div`
    width: 85vw;
    margin-left: auto;
    margin-right: auto;
`

const ProjectsContainer = styled.div`
    display: flex;
    height: 70vh;
    flex-wrap: wrap;
    justify-content: space-around;
`

const ProjectContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 23rem;
    margin: 3.5rem 1rem;
    text-align: center;
    justify-content: center;
    border-radius: .8rem;
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }

    .works__data {
        position: absolute;
        bottom: -100%;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(185,59,109,.9);
        border-radius: .5rem;
        transition: .3s;
    }

    .works__link {
        display: inline-flex;
        font-size: 1.5rem;
        background-color: ${theme.clrWhiteDark};
        color: ${theme.clrPinkDark};
        padding: .25rem;
        border-radius: .25rem;
        margin-bottom: 1rem;
        transition: all .3s ease;
    }

    .works__link:hover {
        background-color: ${theme.clrPinkDark};
        color: ${theme.clrWhiteDark};
        transform: scale(1.2);
    }

    .works__link-group {
        display: flex;
        flex-direction: row;

        a {
            margin: 10px;
        }
    }

    .works__title {
        font-size: 1.5rem;
        color: ${theme.clrWhiteDark};
        font-weight: 600;
    }

    .works__description {
        font-size: 1.1rem;
        letter-spacing: 1.4px;
        color: ${theme.clrWhiteDark};
        padding: 1rem;
        font-weight: 500;
        text-align: center;
    }

    .works__description-makes {
        margin: 15px 10px;

        span {
            background-color: ${theme.clrPrimary9};
            border-radius: .2rem;
            margin: 5px;
            padding: 5px;
            font-weight: 400;
            letter-spacing: 1px;
            color: ${theme.clrPinkDark};
        }
    }

    &:hover .works__data {
        bottom: 0;
    }
`

export default Projects