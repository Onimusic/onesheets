import React from 'react';
import { styled } from 'styled-components';

const StyledCard = styled.div`
    width: 90%;
    box-shadow: 0px 2px 5px 0px rgba(214,214,214,1);
    padding: 1rem;
`

export const Card = () => {
    return (
        <StyledCard>
            Card
        </StyledCard>
    )
}