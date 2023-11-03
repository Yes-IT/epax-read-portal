import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AppToolBar from "../components/AppToolBar"
import Images from '../components/CardElements';
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
        
        <Box sx={{ overflow: 'auto', flexGrow: 1, p: 3}}>
        <Toolbar />
        <Search context="news" topic=""/>
        <Divider />
        <Inbox/>
        <Pins/>
        <Favoriates />
        <Comments/>
        <Sharings/>
        <Publishings/>
        <Votes/>
        <Divider />
        <Tags/>
        <Trash/>
          {/* <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Operations/>
      </Box>
    </Box>
  );
}