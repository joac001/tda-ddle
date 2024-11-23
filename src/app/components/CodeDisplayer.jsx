import { Box, Typography } from "@mui/material";
import example from "../data/dataExample";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function CodeDisplayer({ title }) {
    const content = example;
    const lines = content.split('\n');

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '768px',
                overflow: 'hidden',
                boxShadow: 4,
                backgroundColor: 'background.paper',
                fontFamily: 'monospace',
            }}
        >
            {/* Header bar */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: 2,
                    py: 1,
                    backgroundColor: 'primary.dark',
                }}
            >
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Box
                        sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: '#ff5f56',
                        }}
                    />
                    <Box
                        sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: '#ffbd2e',
                        }}
                    />
                    <Box
                        sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: '#27c93f',
                        }}
                    />
                </Box>
                <Typography
                    variant="subtitle1"
                    sx={{ marginLeft: 2, color: 'primary.contrastText' }}
                >
                    {`${title}.py`}
                </Typography>
            </Box>

            {/* Sidebar + Content */}
            <Box sx={{ display: 'flex' }}>
                {/* Main content area */}
                <Box sx={{ flex: 1, p: 2, backgroundColor: 'background.paper', overflowX: 'scroll' }}>
                    <Box sx={{ display: 'flex' }}>
                        {/* Line numbers */}
                        <Box
                            sx={{
                                textAlign: 'right',
                                paddingRight: 2,
                                color: 'text.disabled',
                                userSelect: 'none',
                            }}
                        >
                            {lines.map((_, idx) => (
                                <Typography key={idx} variant="body2" sx={{ lineHeight: 1.8 }}>
                                    {idx + 1}
                                </Typography>
                            ))}
                        </Box>

                        {/* Code content */}
                        <Box sx={{ flex: 1, color: 'text.primary' }}>
                            <SyntaxHighlighter language="python" style={vscDarkPlus}>
                                {content}
                            </SyntaxHighlighter>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};