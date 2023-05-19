import React from 'react';
import { styled } from 'styled-components';

export interface BadgesProps {
    text?: string;
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
}

const StyledBadge = styled.div<BadgesProps>`
    background-color: ${(props) => {
        switch (props.color) {
            case 'primary':
                return '#3A8BD6';
            case 'secondary':
                return '#BEBEBE';
            case 'success':
                return '#5CB85C';
            case 'error':
                return '#D9534F';
            case 'warning':
                return '#F0AD4E';
            default:
                return '#FFF';
        }
    }};

    display: inline-block;
    padding: 0.35em 0.65em;
    font-size: .75em;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;

`

export const Badges = ({text, color = 'primary'} : BadgesProps) => {
    return (
        <StyledBadge color={color}>{text}</StyledBadge>
    )
}