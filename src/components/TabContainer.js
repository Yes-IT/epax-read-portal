import React,{useEffect} from "react";
import { Tabs, Tab, Box, Paper, Typography, AppBar} from "@mui/material";
import PostAdd from "@mui/icons-material/PostAdd";
import CardElements from './CardElements'
import CloseIcon from '@mui/icons-material/Close';
import { TabSharp } from "@mui/icons-material";
  let maxTabIndex = 1;
  let currentTablIndex = 1;

  function TabPanel(props) {
    const { children, tabId } = props;
    return (
      // <div>
      // <Box sx={{border:1}}
      //   value={maxTabIndex}
      //   index={maxTabIndex}
      //   hidden={tabId !== currentTablIndex}
      //   key={maxTabIndex}
      // >
      //   {children}
      // </Box>
      // </div>
      <div>
         {children}
      </div>
    );
  }

  

export default function TabContainer(props) {
   
    const [tabId, setTabId] = React.useState(0);
    const [deleteTab, setDeleteTab] = React.useState(0);
    const [tabs, setTabs] = React.useState([<Tab  icon={ <PostAdd />} key="0" value="0" />]);
    const [tabPanels, setTabPanels] = React.useState([
      <TabPanel 
      tabId={currentTablIndex} 
      key={currentTablIndex}
      >
        {
          function(context){
            switch (context) {
              case "gallery": return <CardElements />;
              default: return "New Tab Panel -"
            }
          }("gallery")
        
        }
        </TabPanel>

    ]);

   
    useEffect(() => {
      setTabs(tabs);
    }, [tabs]);

    const handleTabChange = (event, newTabId) => {
      console.log(newTabId);
      if (newTabId == 0) {
        console.log("create new "+newTabId);
        handleAddTab("gallery");
      } else {
        console.log("click on "+newTabId);
        currentTablIndex = newTabId;
        setTabId(newTabId);
      }
    };
  
    // Handle Add Tab Button

    const handleAddTab = (context) => {
      setTabs([
        ...tabs,
        <Tab 
          label={`${context} Tab ${maxTabIndex}`}
          key={maxTabIndex} 
          value={maxTabIndex}
          tabs = {tabs}
          icon={
            <CloseIcon onClick={(e) => handleTabClose(e, tabs)} />
            } 
          iconPosition='end'
        />
      ]);
      console.log(tabs);
      currentTablIndex = maxTabIndex;
      handleTabsContent(context);
      maxTabIndex = maxTabIndex + 1;
    };
  
    const getTabs=()=>{
      return tabs;
    }

    const handleTabsContent = (context) => {
   
      setTabPanels([
        ...tabPanels,
        <TabPanel 
        tabId={currentTablIndex} 
        key={currentTablIndex}
        >
          {
            function(context){
              switch (context) {
                case "gallery": return <CardElements />;
                default: return "New Tab Panel -"
              }
            }(context)
          
          }
          </TabPanel>
      ]);

    };

    const handleTabClose = (event, tab) => {
      console.log("before");
      setDeleteTab(event.target);
      alert(tab);
      console.log(event.value);
      console.log(getTabs());
    };

    // const handleTabClose = (event) => {
    //   //event.stopPropagation();
    //   console.log("before");
    //   alert(tabs.length);
    //   alert(tabPanels.length);
    //   console.log(tabs);
      
    //   // tabs.forEach(tab=>console.log(tab));
    //   // console.log("after");
    //   // tabs.filter(tab =>tab.key !== event.value).forEach(tab=>console.log(tab));
    //   // console.log("filered");
    //   // setTabs(
    //   //   tabs.filter(tab =>tab.key !== event.value)
    //   // );
      
    //   // setTabPanels(
    //   //   tabPanels.filter(tabPanel => tabPanel.key !== event.value)
    //   // );
      
    //   // setTabId(event.value-1)
  
    // }

    return (
       <>
          <Tabs
            value={tabId}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Context Tabs"
          > {alert("+"+tabs.length)}
            {/* {tabs} */}
            {tabs.length && tabs.map(child => child)}
            
          </Tabs>
        <Box padding={2}>
        {
         tabPanels
        }
        </Box>
        </>
    );
  }
  
  
  
