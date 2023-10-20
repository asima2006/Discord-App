import React, { useState } from 'react'
import { Box, Tooltip, Typography } from '@mui/material';
import Avatar from '../../../shared/components/Avatar';
import InvitationDecisionButton from './InvitationDecisionButton';
import { connect } from 'react-redux';
import { getAction } from '../../../store/actions/friendsAction';

const PendingInvitationListItem = ({
    id,
    mail,
    username,
    acceptFriendInvitation = () => { },
    rejectFriendInvitation = () => { }
}) => {
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleInvitation = () => {
        acceptFriendInvitation({ id });
        setButtonDisabled(true)
    }

    const handleDeclination = () => {
        rejectFriendInvitation({ id });
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
                        acceptInvitationhandler={handleInvitation}
                        rejectInvitationhandler={handleDeclination}
                    />
                </Box>

            </div>
        </Tooltip>
    )
}

const mapActionToProps = (dispatch) => {
    return {
        ...getAction(dispatch),
    };
}

export default connect(null ,mapActionToProps)(PendingInvitationListItem)
