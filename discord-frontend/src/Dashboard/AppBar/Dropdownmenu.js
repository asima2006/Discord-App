import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import  MoreVertIcon from '@mui/icons-material/MoreVert'
import { logout } from '../../shared/utils/auth';

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
//   console.log("%c\n\n███╗   ███╗ ██╗   ██╗ ██████╗\n████╗ ████║ ██║   ██║   ██╔═╝\n██╔████╔██║ ██║   ██║   ██║\n██║╚██╔╝██║ ██║   ██║   ██║\n██║ ╚═╝ ██║ ╚██████╔╝ ██████╗\n╚═╝     ╚═╝  ╚═════╝  ╚═════╝\n\n")
  return (
    <div>
        <IconButton onClick={handleMenuClick} style={{color: 'white', position: 'absolute', right: '0', top: '0'}}>
            <MoreVertIcon/>
        </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default DropdownMenu
//   console.log("%c\n\n███╗   ███╗ ██╗   ██╗ ██████╗\n████╗ ████║ ██║   ██║   ██╔═╝\n██╔████╔██║ ██║   ██║   ██║\n██║╚██╔╝██║ ██║   ██║   ██║\n██║ ╚═╝ ██║ ╚██████╔╝ ██████╗\n╚═╝     ╚═╝  ╚═════╝  ╚═════╝\n\nTip")

