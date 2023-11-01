import React from 'react'

export interface ButtonProps {
    text?: string;
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
    children: React.ReactNode; 
    onClick?: () => void;
  };

  export function Button({ children, onClick, color = 'primary',}: ButtonProps){
    return (
      <button onClick={onClick} className={`btn btn-${color as any | string}`}>
        {children}
      </button>
    );
  };