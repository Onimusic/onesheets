import React from 'react'

export interface ButtonProps {
    text?: string;
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
    onClick?: () => void;
  };

  export function Button({ text, onClick, color = 'primary',}: ButtonProps){
    return (
      <button onClick={onClick} className={`btn btn-${color as any | string}`}>
        {text}
      </button>
    );
  };