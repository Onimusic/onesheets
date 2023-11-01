
import React from 'react'

export interface MenuProps {
    style: React.CSSProperties; // Tipo específico para 'style'
    children: React.ReactNode; // Tipo específico para 'children'
}

export const Menu = ({ style, children }: MenuProps) => {
    return (
        <>
            <div
                style={style}
            >
                {children}
            </div>
        </>
    )
}
