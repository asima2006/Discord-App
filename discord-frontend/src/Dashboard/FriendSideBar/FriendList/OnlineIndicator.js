import React from 'react'
import { Box } from '@mui/material'
import FiberManaulRecordIcon from '@mui/icons-material/FiberManualRecord'

const OnlineIndicator = () => {
  return (
    <Box sx={{
        color: '#3ba55d',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        right: '5px'
    }}>
      <FiberManaulRecordIcon/>
    </Box>
  )
}

export default OnlineIndicator
