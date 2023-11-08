import React from "react";
import CardElements from "../components/CardElements";
import Header from "../components/Header";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Gallery() {
  const theme = useTheme();

  return (
    <>
      <div>
        <div className="text-center">
          <Header />
        </div>
        <Box sx={{ backgroundColor: 'yellow', width: '100%', flexDirection: 'column', flexGrow: 1 }}>
          <IconButton>{theme.direction !== 'rtl' ? <CloseIcon /> : <CloseIcon />}</IconButton>
          Announcement
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box sx={{ flexDirection: 'column', backgroundColor: 'lightgrey', height: '90%' }}>
            <Box sx={{ display: 'flex', width: '100%', flexDirection: 'row', height: '100%' }}>
              <Box sx={{ width: '90%' }}>
                <CardElements />
              </Box>
              <Box sx={{ backgroundColor: 'red', flexGrow: 1 }}>
                advertisment
                <IconButton>{theme.direction !== 'rtl' ? <CloseIcon /> : <CloseIcon />}</IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
}
