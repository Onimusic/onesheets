import React from 'react'
import {Button as Btn} from '@nextui-org/react'

export interface ButtonProps {
    text?: string;
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
    onClick?: () => void;
  };

  export function Button({ text, onClick, color = 'primary',}: ButtonProps){
    return (
      <Btn onClick={onClick} color={color as any | string}>
        {text}
      </Btn>
    );
  };