import React from 'react';
import { styled } from 'styled-components';

export interface InputProps {
    placeholder?: string; // texto de exemplo
    label?: string; // texto que fica por cima do input
    helpText?: string; // tetxto que orienta o usuário, fica por baixo do input
    type?: string; // tipo do input (text, url, number...)
    status?: 'default' | 'success' | 'error'; // para caso de validação
    onChange?: () => void;
}


export const StyledInput = styled.div<InputProps>`
    font-family: sans-serif;
    label {
        font-weight: bold;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        width: 80%;
        max-width: 300px;
        color: ${(props) => {
            switch (props.status) {
                case 'default':
                    return '#3a3a3a';
                case 'success':
                    return '#5CB85C';
                case 'error':
                    return '#D9534F';
                default:
                    return '#BEBEBE';
            }
        }};
    }
    input {
        padding: .5rem;
        border-radius: 0.5rem;
        border: solid 2px;
        border-color: ${(props) => {
            switch (props.status) {
                case 'default':
                    return '#3a3a3a';
                case 'success':
                    return '#5CB85C';
                case 'error':
                    return '#D9534F';
                default:
                    return '#BEBEBE';
            }
        }};
    }
    span {
        font-size: 12px;
        font-weight: bold;
    }
    
`

export const Input = ({placeholder, label, helpText, type = 'text', status = 'default', onChange} : InputProps) => {
    return (
        <>
        <StyledInput status={status}>
            <label>
                {label}
                <input
                    placeholder={placeholder}
                    type={type}
                    onChange={onChange}
                />
                <span>{helpText}</span>
            </label>
        </StyledInput>
        </>
    )
}