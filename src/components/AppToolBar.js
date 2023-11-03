import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppControls from "./AppControls";


function AppToolBar() {
 
  return (
        <Toolbar disableGutters>
          <AppControls />
        </Toolbar>
  );
}
export default AppToolBar;