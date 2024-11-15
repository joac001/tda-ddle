'use client';
import { Container, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useState } from 'react';
import { usePageStore } from '@/app/stores/pageStore';

export default function Header() {

    const [alignment, setAlignment] = useState(0);

    const { setPage } = usePageStore();

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);

        const page = event.target.value
        setPage({ page });
    };

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2%' }}>
            <Typography variant="subtitle1">Elige tu modo de juego</Typography>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton value={0}>Reto diario</ToggleButton>
                <ToggleButton value={1}>Parcial</ToggleButton>
            </ToggleButtonGroup>
        </Container >
    );
}