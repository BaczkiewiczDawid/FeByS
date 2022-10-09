import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 90vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #2a2a2a;

    @media screen and (min-width: 768px) {
        width: 80vw;
    }

    @media screen and (min-width: 1080px) {
        width: 70vw;
    }

    @media screen and (min-width: 1440px) {
        width: 60vw;
    }
`;