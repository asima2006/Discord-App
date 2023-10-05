import React from 'react'
import { styled } from '@mui/system'
import MainBarButton from './MainBarButton';

const MainContainer = styled('div')({
    width: '60px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#202225',
});

const SideBar = () => {
  return (
    <MainContainer>
      <MainBarButton/>
    </MainContainer>
  )
}

export default SideBar
