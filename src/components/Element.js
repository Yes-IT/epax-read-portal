import * as React from 'react';
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import useTFClassify from "../utils/hooks/useTFClassify";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreIcon from '@mui/icons-material/MoreVert';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Item = styled(Paper)(({ theme }) => ({
  alignItems: 'flex-start',
  padding: theme.spacing(0),
  textAlign: 'right',
  '@media all': {
    minHeight: 0,
  },

}));


function Image({ index, image, handleRemove, show }) {
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef();
  const { predict, predictions, setPredictions, isLoading } = useTFClassify();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {(predictions.length > 0 || isLoading) && (
        <span
          className="absolute bg-gray-800 text-white rounded-lg shadow px-2 left-0 ml-5"
          onClick={() => setPredictions([])}
        >
          {isLoading && <p>Fetching results...</p>}
          {predictions.map((prediction) => (
            <div className="flex justify-between text-sm">
              <p>{prediction.className}</p>
              <p>{Math.floor(prediction.probability * 100)} %</p>
            </div>
          ))}
        </span>
      )}

      {/*<AppBar position="static" >
        <StyledToolbar>
         <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
          >
          </Typography>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </StyledToolbar>
      </AppBar> */}

      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={0}
      >
        <Item >
          <Box sx={{ flexGrow: 0 }}>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="stretch"
              spacing={0}
            >
              <IconButton
                size="small"
                aria-label="display more actions"
                edge="end"
                color="inherit"
              >
                <MoreIcon />
              </IconButton>

              <Tooltip title="Open Menu">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}
                  size="small"
                  aria-label="display more actions"
                  edge="end"
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '25px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Stack>
          </Box>

        </Item>
        {/* <Item> <i
        className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${
          isHovering ? "" : "hidden"
        }`}
        onClick={() => handleRemove(index)}
      ></i>
      <i
        className={`fas fa-search absolute left-0 cursor-pointer opacity-25 hover:opacity-100 ${
          isHovering ? "" : "hidden"
        }`}
        onClick={() => predict(imageRef.current)}
      ></i>
  </Item> */}
        <Item><img
          ref={imageRef}
          onClick={show}
          src={image}
          width="100%"
          height="auto"
          crossOrigin="anonymous"
        />
        </Item>
        <Item>
        <Box sx={{ flexGrow: 1}}>
    <BottomNavigation sx={{ flexGrow: 1}} value={value} onChange={handleChange}>
      <BottomNavigationAction sx={{ flexGrow: 1}}
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction sx={{ flexGrow: 1}}
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction sx={{ flexGrow: 1 }}
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
    </Box >
        </Item>

      </Stack>


    </div>
  );
}

Image.propTypes = {
  show: PropTypes.func,
  index: PropTypes.number,
  image: PropTypes.string,
  handleRemove: PropTypes.func,
};

export default Image;
