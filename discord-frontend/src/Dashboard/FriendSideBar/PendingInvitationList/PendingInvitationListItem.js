import React, { useState } from 'react'
import { Box, Tooltip, Typography } from '@mui/material';
import Avatar from '../../../shared/components/Avatar';
import InvitationDecisionButton from './InvitationDecisionButton';

const PendingInvitationListItem = ({
    id,
    mail,
    username,
    acceptFriendInvitation = () => { },
    declineFriendInvitation = () => { }
}) => {
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleInvitation = () => {
        acceptFriendInvitation({ id });
        setButtonDisabled(true)
    }

    const handleDeclination = () => {
        declineFriendInvitation({ id });
        setButtonDisabled(true);
    }
    return (
        <Tooltip title={mail}>
            <div style={{ width: '100%' }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '42px',
                        marginTop: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Avatar username={username} />
                    <Typography
                        style={{
                            marginLeft: '7px',
                            fontWeight: 700,
                            flexGrow: 1,
                            color: '#8e9297'
                        }}
                        variant='subtitle1'
                        align='left'
                    >
                        {username}
                    </Typography>
                    <InvitationDecisionButton
                        disabled={buttonDisabled}
                        acceptInvitationhandler={acceptFriendInvitation}
                        rejectInvitationhandler={declineFriendInvitation}
                    />
                </Box>

            </div>
        </Tooltip>
    )
}

export default PendingInvitationListItem
