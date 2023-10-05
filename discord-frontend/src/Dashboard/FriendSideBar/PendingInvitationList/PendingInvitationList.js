import React from 'react'
import styled from '@emotion/styled'
import PendingInvitationListItem from './PendingInvitationListItem'

const DUMMY_INVITATION = [
  {
    _id: 1,
    senderId: {
      username: 'Rahul',
      mail: 'dummy@123.mail'
    }
  },
  {
    _id: 2,
    senderId: {
      username: 'Mark',
      mail: 'mark@123.mail'
    }
  }
]

const MainContainer = styled('div')({
    width: '100%',
    height: '22%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
})

const PendingInvitationList = () => {
  return (
    <MainContainer>
      {DUMMY_INVITATION.map((invitation) =>(
        <PendingInvitationListItem
          key={invitation._id}
          id={invitation._id}
          username={invitation.senderId.username}
          mail={invitation.senderId.mail}
        />
      ))}
    </MainContainer>
  )
}

export default PendingInvitationList
