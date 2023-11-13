import React from 'react'
import styled from '@emotion/styled'
import { IconButton } from '@mui/material'
import CloseFullScreenIcon from '@mui/icons-material/CloseFullscreen'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'

const MainContainer = styled('div')({
    position: 'absolute',
    bottom: '2px',
    right: '10px'
})

const RoomResizeHandler = ({isRoomMinimized, handleRoomSize}) => {
  return (
    <MainContainer>
      <IconButton style={{color: 'white'}} onClick={handleRoomSize}>
        {isRoomMinimized ? <OpenInFullIcon/> : <CloseFullScreenIcon/>}
      </IconButton>
    </MainContainer>
  )
}

export default RoomResizeHandler
