import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import ClearIcon from '@mui/icons-material/Clear'
import { Box } from '@mui/material'
import { IconButton } from '@mui/material'

const InvitationDecisionButton = ({ disabled , acceptFriendInvitation, declineFriendInvitation }) => {
  return (
    <Box sx={{ display: 'flex'}}>
      <IconButton style={{color: 'green'}} disabled={disabled} onClick={acceptFriendInvitation}>
        <CheckIcon/>
      </IconButton>
      <IconButton style={{color: 'red'}} disabled={disabled} onClick={declineFriendInvitation}>
        <ClearIcon/>
      </IconButton>
    </Box>
  )
}

export default InvitationDecisionButton
