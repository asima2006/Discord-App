import React, { useState, useEffect } from 'react'
import AuthBox from '../../shared/components/AuthBox'
import LoginPageheader from './LoginPageheader'
import LoginPageInputs from './LoginPageInputs'
import LoginPagefooter from './LoginPagefooter'
import { validateLoginForm } from '../../shared/utils/validator'
import { connect } from 'react-redux'
import { getActions } from '../../store/actions/authAction'
import { useNavigate} from 'react-router-dom';

const LoginPage = ({login}) => {

  const history = useNavigate();

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleLogin = () => {
    const userDetails = {
      mail,
      password
    }
    login(userDetails, history)
  };

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password, setIsFormValid]);

  return (
    <AuthBox>
      <LoginPageheader />
      <LoginPageInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPagefooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  )
}

const mapActionsToprops = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToprops)(LoginPage)