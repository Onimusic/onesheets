import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: #0092E0;
    color: #FFF;
    border: solid 1px #0092E0;
    border-radius: .5rem;
    padding: .875rem 1.125rem;
    font-size: 1rem;
    cursor: pointer;
    transition: .3s ease-in-out;
    &:hover {
        background-color: #005D8F;
        border: solid 1px #0092E0;
    }
`

export const OniButton = () => {
    return(
        <StyledButton>Clique Aqui!</StyledButton>
    )
}