import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 95vw;
    margin: 3rem auto;
    color: #2a2a2a;

    @media screen and (min-width: 768px) {
        width: 80vw;
    }

    @media screen and (min-width: 1080px) {
        width: 70vw;
    }

    h2 {
        margin-left: 1rem;
    }
`;