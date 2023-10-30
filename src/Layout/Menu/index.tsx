import { Container } from '@nextui-org/react'
import React from 'react'

export interface MenuProps {
    style: React.CSSProperties; // Tipo específico para 'style'
    children: React.ReactNode; // Tipo específico para 'children'
}

export const Menu = ({ style, children }: MenuProps) => {
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
