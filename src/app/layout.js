import { Inter } from "next/font/google";
import "./globals.css";

import ColorModeProvider from "@/app/context/ThemeContext";
import { Box } from "@mui/material";
import Header from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TDAddle",
  description: "Gamify your study",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} sx={{ display: 'flex', justifyContent: 'center', alignItmes: 'center', margin: '30%' }}>
        <ColorModeProvider>
          <Box
            sx={{
              height: '100vh',
              width: '100vw',
              overflow: 'auto',
            }}
          >
            <Header />
            {children}
          </Box>
        </ColorModeProvider>
      </body>
    </html>
  );
}
