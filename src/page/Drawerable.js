import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import AppToolBar from "../components/AppToolBar"
import Pins from "../components/Navivations/Pin/Navigates"
import Comments from "../components/Navivations/Comments/Navigates"
import Favoriates from "../components/Navivations/Favorites/Navigates"
import Votes from "../components/Navivations/Votes/Navigates"
import Publishings from "../components/Navivations/Publishings/Navigates"
import Sharings from "../components/Navivations/Sharings/Navigates"
import Trash from "../components/Navivations/TrashCan/Navigates"
import Inbox from "../components/Navivations/Inbox/Navigates"
import Tags from "../components/Navivations/Tags/Navigates"
import Search from "../components/Search"
import Operations from "../components/TabsContainer"
const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <AppToolBar />
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >

        <Box sx={{ overflow: 'auto', flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Search context="news" topic="" />
          <Divider />
          <Inbox />
          <Pins />
          <Favoriates />
          <Comments />
          <Sharings />
          <Publishings />
          <Votes />
          <Divider />
          <Tags />
          <Trash />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Operations />
      </Box>
    </Box>
  );
}