import React from 'react'
import CustomPrimaryButton from '../../shared/components/customPrimaryButton'
import RedirectInfo from '../../shared/components/RedirectInfo'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from '@mui/material'

const LoginPagefooter = ({handleLogin, isFormValid}) => {
    const history = useNavigate();

    const handlepushtoRegisterpage = ()=>{
        history('/register')
    }

    const getFormnotvlidmessage = () => {
        return 'Enter correct e-mail address and password must be in 6 to 12 characters'
    }

    const getFormvalidmessage = () => {
        return 'Press to log in'
    }

  return (
    <>
        <Tooltip
            title={!isFormValid ? getFormnotvlidmessage() : getFormvalidmessage()}
        >
            <div>
            <CustomPrimaryButton 
                    label='Log In'
                    additionalStyles={{marginTop: '30px'}}
                    disabled={isFormValid}
                    onClick={handleLogin}
                    />
            </div>
        </Tooltip>
        <RedirectInfo
            text='Need an account? '
            redirectText='Create an account'
            additionalStyles={{ marginTop: '14px'}}
            redirectHandler={handlepushtoRegisterpage}
        />
    </>
  )
}

export default LoginPagefooter
