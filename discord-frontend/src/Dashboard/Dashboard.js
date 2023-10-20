import React, { useEffect } from 'react'
import { styled } from '@mui/system'
import SideBar from './SideBar/SideBar';
import FriendSideBar from './FriendSideBar/FriendSideBar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar';
import { logout } from '../shared/utils/auth';
import {connect} from 'react-redux'
import { getActions } from '../store/actions/authAction';
import { connectionWithSocketServer } from '../realTimeCommunication/socketConnection';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});

const Dashboard = ({setUserDetails}) => {
  useEffect(()=>{
    const userDetails = localStorage.getItem('user');
    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      connectionWithSocketServer(JSON.parse(userDetails));
    }
    // eslint-disable-next-line
  }, [])
  return (
    <Wrapper>
      <SideBar/>
      <FriendSideBar/>
      <Messenger/>
      <AppBar/>
    </Wrapper>
  );
};

const mapActionstoProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionstoProps)(Dashboard);
