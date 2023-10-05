import React from 'react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'

const AvatarPreview = styled('div')({
    height: '42px',
    width: '42px',
    backgroundColor: '#5865f2',
    borderRadius: '42px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: '700',
    marginLeft: '25px',
    color: 'white',
})

const Avatar = ({ username, large}) => {
  return (
    <AvatarPreview style={large ? {height: '80px', width: '80px'}: {}}>
      <Typography>{username.substring(0,2)}</Typography>
    </AvatarPreview>
  )
}

export default Avatar
