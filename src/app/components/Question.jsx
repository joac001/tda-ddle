'use client';
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Question({ title, type }) {

    const [questionElement, setQuestionElement] = useState(null);

    useEffect(() => {
        switch (type) {
            case 'input':
                setQuestionElement(Input);
                break;
            case 'd&d':
                setQuestionElement(DAndD);
                break;
        }
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: 'backgorund.paper',
                width: '100%',
                //TODO: Give it a separation from the let side
            }}
        >
            <Typography variant="subtitle1"
                sx={{
                    justifySelf: 'center',
                    backgroundColor: 'primary.dark',
                    color: 'primary.contrastText',
                    width: '100%',
                    alignItems: 'center',
                    px: 2,
                    py: 1,
                }}>
                {title}
            </Typography>
            {questionElement}
        </Box>
    );
}

function Input() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'background.paper',
                width: '100%',
                height: '100%',
            }}
        >
            {/* //TODO: Build an input component with auto complete for posible answers */}
            <Typography variant="subtitle1" sx={{ color: 'primary.contrastText' }}>
                Input
            </Typography>
        </Box>
    );
}

function DAndD() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'background.paper',
                width: '100%',
                height: '100%',
            }}
        >
            <Typography variant="subtitle1" sx={{ color: 'primary.contrastText' }}>
                {/* //TODO: Build a component that let's drag and drop an option into a space in the frase */}
                Drag and Drop
            </Typography>
        </Box>
    );
}