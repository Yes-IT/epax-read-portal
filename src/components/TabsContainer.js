import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CardElements from './CardElements';
let maxTabIndex = 0;
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      }
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

export default function BasicTabs() {
  
  const [tabIndex, setTabIndex] = React.useState(0);
  const [deletTabIndex, setDeleteTabIndex] = React.useState(-1);
  const [tabs, setTabs] = React.useState([]);
  const [tabPanels, setTabPanels] = React.useState([]);

  const handleChange = (event, selectedTabIndex) => {
    setTabIndex(selectedTabIndex);
  };

  React.useEffect(() => {
    removeTab();
  }, [deletTabIndex]);

  function generateTab(label) {
    if (maxTabIndex !== 0) {
      return (
        <Tab
          label={`${label} - ${maxTabIndex}`}
          value={maxTabIndex}
          icon={
            <CloseIcon
              value={maxTabIndex}
              onClick={(e, value) => handleTabClose(e, value)}
            />
          }
          iconPosition="end"
        />
      );
    } else {
      return <Tab label={`${label} - ${maxTabIndex}`} value={maxTabIndex} />;
    }
  }
  const addTab = (label) => {
    setTabs([...tabs, generateTab(label)]);
    setTabPanels([
      ...tabPanels,
      <TabPanel value={maxTabIndex} index={maxTabIndex}>
       {maxTabIndex===0 &&  <CardElements />}
       {maxTabIndex!==0 &&  <>
       <Box>
        abc
       </Box>
       <Box>
        abcdef
       </Box>
       </>
       }
        {/* maxTabIndex = {maxTabIndex}
        tabIndex = {tabIndex}
        value = {tabIndex}
        index = {tabIndex} */}
      </TabPanel>
    ]);
    maxTabIndex++;
  };
  const handleTabClose = (e, value) => {
    //console.log(e.currentTarget.getAttribute("value"));
    setDeleteTabIndex(e.currentTarget.getAttribute("value"));
  };

  const removeTab = () => {
    setTabs(
      tabs.map((tab) => {
        //console.log(tab.props.value + " " + deletTabIndex);
        if (tab && Number(tab.props.value) !== Number(deletTabIndex)) {
          return tab;
        }
      })
    );
    setTabPanels(
      tabPanels.map((tabPanel) => {
        //console.log(tab.props.value + " " + deletTabIndex);
        if (
          tabPanel &&
          Number(tabPanel.props.value) !== Number(deletTabIndex)
        ) {
          return tabPanel;
        }
      })
    );
    setTabIndex(0);
  };
  const handleAddTab = (e, value) => {
    addTab("New Tab ");
  };

  return (
    <Box sx={{ width: "100%" }}>
      <PostAddIcon onClick={(e) => handleAddTab(e, "create")} />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tabIndex} onChange={handleChange} aria-label="operation">
          {tabs}
        </Tabs>
      </Box>
      {tabPanels.filter(
        (tabPanel) =>
          tabPanel &&
          tabPanel.props.index === tabIndex &&
          tabPanel.props.index !== deletTabIndex
      )}
    </Box>
  );
}
