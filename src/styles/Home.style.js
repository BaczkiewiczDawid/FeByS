import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;

    img {
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        width: 100vw;
        height: 200vh;
    }
`;

export const Blur = styled.div`
    width: 100vw;
    height: 200vh;
    position: absolute;
    background-color: #2a2a2a;
    opacity: .75;
    z-index: -1;
`;