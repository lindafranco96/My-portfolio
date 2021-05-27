import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import RightNav from './RightNav'


const ButtonNav = () => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open);
    };

    return !open ? (
        <ButtonContainer open={open} onClick={handleClick} >
            <FontAwesomeIcon icon={faBars} className="button__icon" />
            <RightNav open={open} />
        </ButtonContainer >
    ) : (
            <ButtonContainer open={open} onClick={handleClick} >
                <FontAwesomeIcon icon={faTimes} className="button__icon" />
                <RightNav open={open} />
            </ButtonContainer >
        )
}

const ButtonContainer = styled.div`
    @media screen and (max-width: 770px) {
        width: 2rem;
        height: 2rem;
        /* position: fixed; */
        top: 40px;
        right: 60px;
        z-index: 100;
        transition: all .3s ease;

        .button__icon {
            width: 2rem;
            height: 2rem;
            font-size: 50px;
            color: #f2f2f2;
            z-index: 100;
        }        
    }

    @media screen and (min-width: 770px) {
        display: none;
    }
`

export default ButtonNav;