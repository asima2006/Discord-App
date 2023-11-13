import React from 'react'
import { Button, Typography } from '@mui/material'
import Avatar from '../../../shared/components/Avatar'
import OnlineIndicator from './OnlineIndicator'
import { chatTypes, getActions } from '../../../store/actions/chatAction'
import { connect } from 'react-redux'

const FriendListItem = ({ id, username, isOnline, setChosenChatDetails}) => {
  const handleChosenActiveConnection = () => {
    setChosenChatDetails({ id: id, name: username}, chatTypes.DIRECT);
  }
  return (
    <Button
    onClick={handleChosenActiveConnection}
      style={{
        width: '100%',
        height: '42px',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textTransform: 'none',
        color: 'black',
        position: 'relative'
      }}
    >
      <Avatar username={username} />
      <Typography
        style={{
          marginLeft: '7px',
          fontWeight: 600,
          color: '#8e9297'
        }}
        variant='subtitle1'
        align='left'
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator/>}
    </Button>
  )
};

const mapStateToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  };
};

export default connect(null, mapStateToProps)(FriendListItem)