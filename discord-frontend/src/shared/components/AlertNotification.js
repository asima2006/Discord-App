import React from 'react';
import Alert from '@mui/material/Alert';
import  Snackbar  from '@mui/material/Snackbar';
import {connect} from 'react-redux';
import { getActions } from '../../store/actions/authAction';

const AlertNotification = ({
  showAlertMessage,
  closeAlertMessage,
  alertMessageContent
}) => {
  return (
    <Snackbar 
        anchorOrigin={{ vertical: 'bottom', horizontal:"center"}}
        open={showAlertMessage}
        onClose={closeAlertMessage}
        autoHideDuration={5000}
    >
      <Alert severity='info'>{alertMessageContent}</Alert>
    </Snackbar>
  )
}

const mapAlertstatetoprops = ({alert}) => {
  return{
    ...alert
  };
}

const mapActiontoProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  }
}

export default connect(mapAlertstatetoprops, mapActiontoProps)(AlertNotification)