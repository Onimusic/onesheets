import React from 'react'

export interface PreviewProps {
    style: React.CSSProperties; // Tipo específico para 'style'
    children: React.ReactNode; // Tipo específico para 'children'
}

export const Preview = ({ style, children }: PreviewProps) => {
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
