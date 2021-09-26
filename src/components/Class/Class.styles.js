import styled from 'styled-components';

export const ClassContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    font-family: Raleway,sans-serif;
    color: #333;
    padding: 2vh;
`;

export const ClassName = styled.div`
    text-align: center;
    font-size: 2em;
    text-transform: uppercase;
    border-bottom: 3px solid #8b0000;
    margin-bottom: 0.5em;
    @media (max-width: 480px) {
      padding-bottom: 0.5em;
    }
`;

export const ProfilesContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;
