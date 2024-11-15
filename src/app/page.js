'use client';
import { Box } from "@mui/material";
import { usePageStore } from "@/app/stores/pageStore";

import Daily from '@/app/components/Daily';
import Exam from '@/app/components/Exam';

export default function Home() {

  const { page } = usePageStore();
  return (
    <main>
      <Box
        sx={{
          width: '100%',
          height: '100%',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {
          page == 0
            ?
            <Daily></Daily>
            :
            <Exam></Exam>
        }
      </Box>
    </main>
  );
}
