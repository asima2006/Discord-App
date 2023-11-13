import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { logout } from '../../shared/utils/auth';
import { getAction } from '../../store/actions/roomAction';
import { connect } from 'react-redux';

const DropdownMenu = ({ audioOnly, setAudioOnly }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAudioOnlyChange = () => {
    setAudioOnly(!audioOnly);
  };

  //   console.log("%c\n\n███╗   ███╗ ██╗   ██╗ ██████╗\n████╗ ████║ ██║   ██║   ██╔═╝\n██╔████╔██║ ██║   ██║   ██║\n██║╚██╔╝██║ ██║   ██║   ██║\n██║ ╚═╝ ██║ ╚██████╔╝ ██████╗\n╚═╝     ╚═╝  ╚═════╝  ╚═════╝\n\n")
  return (
    <div>
      <IconButton onClick={handleMenuClick} style={{ color: 'white' }}>
        <MoreVertIcon />
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
        <MenuItem onClick={handleAudioOnlyChange}>{audioOnly ? 'Audion Only enabled' : 'Audio Only disabled'}</MenuItem>
      </Menu>
    </div>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  }
}

const mapActionToProps = (dispatch) => {
  return {
    ...getAction(dispatch),
  }
}

export default connect(mapStoreStateToProps, mapActionToProps)(DropdownMenu);