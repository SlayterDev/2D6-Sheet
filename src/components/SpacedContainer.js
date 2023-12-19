import React from 'react'
import { Container } from '@mui/material'

export default function SpacedContainer(props, { children, space }) {
    return (
        <Container css={{ '& > *:not(:last-child)': { 
                marginBottom: space 
            } 
        }} {...props}>
            {children}
        </Container>
    )
}
