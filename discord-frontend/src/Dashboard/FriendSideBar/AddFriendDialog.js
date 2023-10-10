import React, { useEffect, useState } from "react";
import { validateMail } from "../../shared/utils/validator";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import InputwithLabelWise from "../../shared/components/InputwithLabelWise";
import Typography from "@mui/material/Typography";
import CustomPrimaryButton from "../../shared/components/customPrimaryButton";
import { connect} from 'react-redux'
import { getAction } from "../../store/actions/friendsAction";

const AddFriendDialog = ({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () => {}
}) => {
    const [mail, setMail] = useState("");
    const [isFormValid, setIsFormValid] = useState("");

    const handleSendInvitation = () => {
        sendFriendInvitation({
            targetMailAddress: mail,
        })
    };

    const handleCloseDialog = () => {
        closeDialogHandler();
        setMail("");
    };

    useEffect(() => {
        setIsFormValid(validateMail(mail));
    }, [mail, setIsFormValid]);

    return (
        <div>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>
                    <Typography component={'span'}>Invite a Friend</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography component={'span'}>
                            Enter a email-address of friend which you would like to invite
                        </Typography>
                    </DialogContentText>
                    <InputwithLabelWise
                        label="Mail"
                        type='text'
                        value={mail}
                        setValue={setMail}
                        placeholder="Enter mail address"
                    />
                </DialogContent>
                <DialogActions>
                    <CustomPrimaryButton
                        onClick={handleSendInvitation}
                        disabled={!isFormValid}
                        label='Send'
                        additionalStyles={{
                            marginLeft: '15px',
                            marginRight: '15px',
                            marginBottom: '10px',
                        }}
                    />
                </DialogActions>
            </Dialog>
        </div>
    );
};

const mapActionToprops = (dispatch) => {
    return {
        ...getAction(dispatch)
    }
}

export default connect(null, mapActionToprops)(AddFriendDialog);
