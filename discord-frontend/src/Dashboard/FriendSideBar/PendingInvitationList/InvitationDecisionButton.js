import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";

const InvitationDecisionButton = ({
  disabled,
  acceptInvitationhandler,
  rejectInvitationhandler,
}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        style={{ color: "green" }}
        disabled={disabled}
        onClick={acceptInvitationhandler}
      >
        <CheckIcon />
      </IconButton>
      <IconButton
        style={{ color: "red" }}
        disabled={disabled}
        onClick={rejectInvitationhandler}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisionButton;
