import React from 'react'
import InputwithLabelWise from '../../shared/components/InputwithLabelWise'

function LoginPageInputs({mail, setMail, password, setPassword}) {
  return (
    <>
        <InputwithLabelWise
            value={mail}
            setValue={setMail}
            label='E-mail' 
            type='text'
            placeholder='Enter e-mail address'
        />

        <InputwithLabelWise
            value={password}
            setValue={setPassword}
            label='Password' 
            type='password'
            placeholder='Enter password'
        />
    </>
  )
}

export default LoginPageInputs
