import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 90vw;
    margin: 0 auto;
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

export const Item = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    margin-top: 1rem;
    width: 100%;

    span {
        margin-top: 2rem;
    }
`;

export const MainInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p:nth-child(n+1) {
        margin-top: 0;
    }

    p {
        margin-left: 1rem;
    }
`;

export const ItemsWrapper = styled.div`
    margin-top: 2rem;
    width: 90vw;

    @media screen and (min-width: 768px) {
        width: 80vw;
    }

    @media screen and (min-width: 1080px) {
        width: 70vw;
        margin-top: 5rem;
    }

    @media screen and (min-width: 1440px) {
        width: 60vw;
    }
`;

export const Title = styled.h2`
    margin-top: 2rem;

    @media screen and (min-width: 1080px) {
        margin-top: 5rem;
    }
`;