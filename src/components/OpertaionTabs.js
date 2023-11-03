import * as React from 'react';
import {useCallback} from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Images from './CardElements';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}





export default function ScrollableTabsButtonVisible() {

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = useCallback(
    (event, tabToDelete) => {
      // stop event from propagating to the target element's parent
      event.stopPropagation(); 

      // const tabToDeleteIndex = activetabs.findIndex(
      //   tab => tab.id === tabToDelete.id
      // );
      const tabToDeleteIndex = tabToDelete;
      const updatedTabs = activetabs.filter((tab, index) => {
        return index !== tabToDeleteIndex;
      });
      const previousTab =
        activetabs[tabToDeleteIndex - 1] ||
        activetabs[tabToDeleteIndex + 1] ||
        {};
      setActiveTabs(updatedTabs);
      setActiveTab(previousTab.id);
    },
    [activetabs]
  );

  return (
    <Box
      sx={{
        maxWidth: { flexGrow: 1 },
        bgcolor: 'background.paper',
      }}
    >
      <Tabs
      onChange={handleChange} 
      value={value}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="visible arrows tabs example"
      >
          <Tab {...a11yProps(0)}  label={
    <span> 
        Gallery
        <IconButton size="small" component="div" onClick={(event) => handleClose(event, 0)}>
            <CloseIcon />
        </IconButton>
    </span>
    }/>
          <Tab label="Articles" {...a11yProps(1)} />
          <Tab label="Profiles" {...a11yProps(2)} />
        </Tabs>
      <TabPanel value={value} index={0}>
      <Images />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Images />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Images />
      </TabPanel>
    </Box>
  );
}