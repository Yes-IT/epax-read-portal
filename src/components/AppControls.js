import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../config/firebase";
import AppContext from "../store/AppContext";
import Search from "./Search";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

import AdbIcon from "@mui/icons-material/Adb";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";

import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Account from "./Account";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import i18next from "../i18n";
import logger from '../utils/log4js/config';

const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },

];
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function AppControls() {
  const currentLanguageCode = "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  const [user] = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('inbox')

    // log for testing
    logger.debug("Some debug messages");
  }, [currentLanguage, t])

  function logout() {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        history.replace("/login");
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElLang, setAnchorElLang] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    console.log(event.target);
  };

  const handleOpenLangMenu = (event) => {
    setAnchorElLang(event.currentTarget);
    console.log(event.target);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };

  const handleCloseUserMenu = (event) => {
    console.log(event.currentTarget.innerText);
    handleMenuSelected(event.currentTarget.innerText);
    setAnchorElUser(null);
  };

  const handleMenuSelected = (selected) => {
    switch (selected) {
      case "Logout":
        return logout();
      default:
        return;
    }
  };

  return (
    <>
      <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        EPAx
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          style={{ outline: "none" }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ width: "50%" }}>
        <Search className="py-10 bg-gray-600 text-white flex justify-between" />
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box justifyContent="center" alignItems="center"
        sx={{ display: { xs: "none", md: "flex" } }}>
        <Tooltip title="Open settings">
          <IconButton
            onClick={handleOpenUserMenu}
            sx={{ p: 2 }}
            size="large"
            edge="end"
            aria-label="current user"
            style={{ outline: "none" }}
            aria-haspopup="true"
            color="inherit"
          >
            <Avatar alt={user.id} src="/static/images/avatar/2.jpg" />
            {/* <AccountCircle /> */}
          </IconButton>
        </Tooltip>
        <Account />

        <IconButton size="large" style={{ outline: "none" }} aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          style={{ outline: "none" }}
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          style={{ outline: "none" }}
          onClick={handleOpenLangMenu}
          size="large"
          variant="text"
          color="inherit"
        >
          <LanguageIcon />
        </IconButton>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
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
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElLang}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElLang)}
          onClose={handleCloseLangMenu}
        >
          {languages.map(({ code, name, country_code }) => (
            <MenuItem key={code} onClick={handleCloseLangMenu}>
              <Typography
                textAlign="center"
                onClick={() => {
                  i18next.changeLanguage(code);
                }}
              >
                {name}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}
