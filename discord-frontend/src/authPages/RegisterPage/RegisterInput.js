import React from 'react'
import InputwithLabelWise from '../../shared/components/InputwithLabelWise';

const RegisterInput = (props) => {
    const {mail, setMail, username, setUsername, password, setPassword} = props;
  return (
    <>
      <InputwithLabelWise
            value={mail}
            setValue={setMail}
            label='E-mail'
            type='email'
            placeholder='Enter e-mail address'
      />

      <InputwithLabelWise
            value={username}
            setValue={setUsername}
            label='Username'
            type='text'
            placeholder='Enter Username'
      />

      <InputwithLabelWise
            value={password}
            setValue={setPassword}
            label='Password'
            type='password'
            placeholder='Enter Password'
      />
    </>
  )
}

export default RegisterInput
