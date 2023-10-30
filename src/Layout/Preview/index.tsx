import { Container } from '@nextui-org/react'
import React from 'react'

export interface PreviewProps {
    style: React.CSSProperties; // Tipo específico para 'style'
    children: React.ReactNode; // Tipo específico para 'children'
}

export const Preview = ({ style, children }: PreviewProps) => {
    return (
        <>
            <Container
                style={style}
            >
                {children}
            </Container>
        </>
    )
}
