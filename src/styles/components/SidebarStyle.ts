import styled from 'styled-components';

export const Container = styled.div`
background: ${props => props.theme.color.background};
width: 4rem;
height: 100vh;
justify-content: center;
align-items: center;
text-align: center;
display: grid;
grid-template-rows: 1fr 1fr 1fr;
`