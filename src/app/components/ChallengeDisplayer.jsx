import Questionare from "./Questionare";
import CodeDisplayer from './CodeDisplayer';
import { Grid2 } from '@mui/material';

export default function ChallengeDisplayer({ challengeType }) {

    // TODO: Call to challenge store to get challenge

    return (
        <Grid2 container sx={{
            display: 'flex', justifyContent: 'center', mx: 4,
        }}>
            < Grid2 item xs={12} sm={6} >
                <CodeDisplayer title={challengeType} />
            </Grid2>
            <Grid2 item xs={12} sm={6}>
                <Questionare />
            </Grid2>
        </ Grid2>
    );
}