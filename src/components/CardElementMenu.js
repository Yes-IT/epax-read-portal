import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FolderDeleteIcon from '@mui/icons-material/FolderDelete';
import ShareIcon from '@mui/icons-material/Share';
import PushPinIcon from '@mui/icons-material/PushPin';
import IosShareIcon from '@mui/icons-material/IosShare';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import AddCommentIcon from '@mui/icons-material/AddComment';
import QrCodeIcon from '@mui/icons-material/QrCode';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import BlurLinearIcon from '@mui/icons-material/BlurLinear';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CardElementView from './CardElementView';

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [showPin, setShowPin] = React.useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
    }
    setOpen(false);
  };
  const openPin = (event) => {
    if (event.target.innerHTML === "Pin") {
      setShowPin(true);
    }
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Tooltip title="Open settings">
          <IconButton
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          style={{ zIndex: "9" }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={openPin}>
                      <ListItemIcon>
                        <PushPinIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Pin</ListItemText>
                    </MenuItem>
                    {showPin && (
                      <CardElementView closeMenuHandler={setOpen} reSetPin={setShowPin} />
                    )}
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <ShareIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Share</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <IosShareIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Publish</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <LoyaltyIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Bookmark</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <AddCommentIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Comment</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <NoteAddIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Note</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <BlurLinearIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>AI Learn</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <QrCodeIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>QR</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <FolderDeleteIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Remove</ListItemText>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
