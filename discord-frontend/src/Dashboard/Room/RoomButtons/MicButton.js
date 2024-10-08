import React, { useState } from 'react'
import { IconButton } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic'
import MicOffIcon from '@mui/icons-material/MicOff'

const MicButton = ({ localStream }) => {
    const [micEnabled, setMicEnabled] = useState(false);

    const handleToggleMic = () => {
      localStream.getAudioTracks()[0].enabled = !micEnabled;
      setMicEnabled(!micEnabled);
    }

  return (
    <IconButton style={{color: 'white'}} onClick={handleToggleMic}>
      {micEnabled ? <MicIcon/> : <MicOffIcon/>}
    </IconButton>
  )
}

export default MicButton
