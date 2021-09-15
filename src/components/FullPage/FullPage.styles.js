import styled from 'styled-components';

export const FullPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    max-width: 100vw;
    color: white;
    font-family: 'Azeret Mono', monospace;
    background: ${(props) => props.background};
    background-color: ${(props) => props.background || 'black'};
`;

export const FullPageTitle = styled.div`
    font-size: 5em;
    text-align: center;
    word-spacing: -0.3em;
    @media (max-width: 480px) {
        line-height: 1.0em;
        margin-bottom: 0.5em;
    }
`;

export const FullPageSubtitle = styled.div`
    font-size: 2em;
    margin-bottom: 2em;
    text-align: center;
    max-width: 40%;
    @media (max-width: 480px) {
        max-width: 100vw;
    }
`;
