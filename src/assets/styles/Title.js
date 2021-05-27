import styled from 'styled-components'
import theme from './../../theme'

const ContainerTitle = styled.div`
    text-align: center;
    /* padding: 1.5em 0; */
    padding: ${props => props.home ? '1.5rem 0' : '4.3rem 0 1.5rem 0'};
    /* padding: 4.2rem 0 1.5rem 0; */

    h1 {
        font-size: 3rem;
        letter-spacing: 2px;
        color: ${theme.clrPinkDark};
    }

    p {
        font-size: 1rem;
        font-weight: 500;
        color: ${theme.clrCoffee};
    }

`

export default ContainerTitle