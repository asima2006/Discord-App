import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import AuthBox from "../../shared/components/AuthBox";
import RegisterInput from "./RegisterInput";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterpage } from "../../shared/utils/validator";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authAction";
import { useNavigate } from "react-router-dom";

const Registerpage = ({ register }) => {
  const history = useNavigate();

  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFromValid] = useState(false);

  const handleRegister = () => {
    const userDetails = {
      mail,
      username,
      password,
    };
    register(userDetails, history);
  };

  useEffect(() => {
    setIsFromValid(validateRegisterpage({ mail, username, password }));
  }, [mail, username, password, setIsFromValid]);

  return (
    <AuthBox>
      <Typography varaint="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterInput
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      />
    </AuthBox>
  );
};

const mapActionsToprops = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToprops)(Registerpage);
