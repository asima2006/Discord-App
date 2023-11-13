import React, { useState } from 'react'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import * as roomHandler from '../../../realTimeCommunication/roomHandler'

const CloseRoomButton = () => {

  const handleLeaveRoom = () => {
      roomHandler.leaveRoom()
  }

  return (
    <IconButton style={{color: 'white'}} onClick={handleLeaveRoom}>
      {<CloseIcon/>}
    </IconButton>
  )
}

export default CloseRoomButton
