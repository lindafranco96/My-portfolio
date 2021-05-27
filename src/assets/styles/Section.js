import styled from 'styled-components'
import theme from './../../theme'

const SectionContainer = styled.div`
    padding: 2rem;
    padding-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    /* margin: 0 50px; */
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.primary ? theme.clrPrimary9 : theme.clrGrey7};
    /* transform:${props => props.primary ? 'scaleX(1.3)' : 'scaleX(1.3)'}; */
`;

export default SectionContainer;