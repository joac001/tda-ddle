import { Box } from "@mui/material";
import ChallengeDisplayer from "./ChallengeDisplayer";

export default function () {
    return (
        <Box sx={{
            display: 'flex', justifyContent: 'center', width: '100% '
        }}>
            < ChallengeDisplayer challengeType='daily' />
        </Box>
    );
}