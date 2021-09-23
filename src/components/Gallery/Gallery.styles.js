import styled from 'styled-components';

export const GalleryContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const GalleryImage = styled.img`
    width: 33vw;
    margin: 0.15vw;
    @media (max-width: 480px) {
        width: 100%;
        margin: 0px;
    }
`;
