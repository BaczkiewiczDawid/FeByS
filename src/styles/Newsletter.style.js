import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
`;

export const Input = styled.input`
    width: 80vw;
    border: none;
    border-bottom: 1px solid #2a2a2a;
    padding: .5rem 1rem;
    margin-top: 2rem;
`;

export const Button = styled.button`
    width: 80vw;
    margin-top: 2rem;
    background-color: #5884F8;
    color: #fafafa;
    border: none;
    padding: 1rem 0;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #345FCE;
        transition: .25s;
    }
`;