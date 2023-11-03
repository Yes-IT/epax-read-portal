import React from "react";
import CardElements from "../components/CardElements";
import Header from "../components/Header";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import {useEffect} from 'react';

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
