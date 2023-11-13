import React from 'react'
import { styled } from '@mui/system'
import DropdownMenu from './Dropdownmenu';
import ChosenOptionLabel from './ChosenOptionLabel'

const MainContainer = styled('div')({
    position: 'absolute',
    right: '0',
    top: '0',
    height: '48px',
    borderBottom: '1px solid black',
    backgroundColor: '#36393f',
    width: 'calc(100% - 314px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 15px'
});

const AppBar = () => {
  return (
    <MainContainer>
      <ChosenOptionLabel />
      <DropdownMenu/>
    </MainContainer>
  )
}

export default AppBar
