import styled from 'styled-components';

export const Title = styled.h1`
    text-align: center;
    margin-top: 2rem;

    @media screen and (min-width: 768px) {
        margin-top: 4rem;
    }

    @media screen and (min-width: 1440px) {
        margin-top: 6rem;
        margin-bottom: 2rem;
    }
`;