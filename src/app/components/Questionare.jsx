import { Box } from "@mui/material";
import Question from "./Question";

// TODO: Add at least one more typ. Do it after implementing conection to backend
const typePosibilities = ['input', 'd&d'];

export default function Questionare() {

    // TODO: Implement randomization when there are more types
    const questionsTypes = [typePosibilities[0], typePosibilities[1]];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'backgorund.paper',
                width: '100%',
                height: '100%',
            }}
        >

            <Question title='¿A que categoria pertenece este codigo?' type={questionsTypes[0]} />
            <Question title='¿Que complejidad tiene?' type={questionsTypes[1]} />

        </Box>
    );
}