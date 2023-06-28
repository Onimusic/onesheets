import React, { FC } from 'react';
import styled, {DefaultTheme} from 'styled-components';


export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  text?: string;
  type?: 'normal' | 'bordered';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  onClick?: () => void;
};
interface StyledButtonProps {
  theme: DefaultTheme;
}


const StyledButton = styled.button<ButtonProps & StyledButtonProps>`
    background-color: ${(props) => {
        if(props.type === 'normal'){
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
        } else {
            return 'transparent'
        }
    
  }};
  border: solid 2px ${(props) => {
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
        return '#0092E0';
    }
  }};
  color: #121214;
  border-radius: 0.5rem;
  padding: 0.875rem 1.125rem;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => {
      if (props.type === 'normal'){
        switch (props.color) {
            case 'primary':
            return '#265f90';
            case 'secondary':
            return '#a4a4a4';
            case 'success':
            return '#4f9d4f';
            case 'error':
            return '#c04845';
            case 'warning':
            return '#d69f47';
            default:
            return '#265f90';
        }
      } else {
        return 'transparent'
      }
    }};
    border: solid 2px ${(props) => {
      switch (props.color) {
        case 'primary':
          return '#265f90';
        case 'secondary':
          return '#a4a4a4';
        case 'success':
          return '#4f9d4f';
        case 'error':
          return '#c04845';
        case 'warning':
          return '#d69f47';
        default:
          return '#265f90';
      }
    }};
  }
`

export const Button: FC<ButtonProps> = ({ text, type='normal', onClick, color = 'primary',}: ButtonProps) => {
    return (
      <StyledButton onClick={onClick} color={color as any | string} type={type as any}>
        {text}
      </StyledButton>
    );
  };