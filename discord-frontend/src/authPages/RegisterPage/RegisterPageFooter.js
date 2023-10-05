import React from 'react'
import CustomPrimaryButton from '../../shared/components/customPrimaryButton'
import RedirectInfo from '../../shared/components/RedirectInfo'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from '@mui/material'

const RegisterPagefooter = ({handleRegister, isFormValid}) => {
    const history = useNavigate();

    const handlepushtoLoginpage = ()=>{
        history('/login')
    }

    const getFormnotvlidmessage = () => {
        return 'Username between 3 to 12 characters and password must be in 6 to 12 characters'
    }

    const getFormvalidmessage = () => {
        return 'Press to Register'
    }

  return (
    <>
        <Tooltip
            title={!isFormValid ? getFormnotvlidmessage() : getFormvalidmessage()}
        >
            <div>
            <CustomPrimaryButton 
                    label='Register'
                    additionalStyles={{marginTop: '30px'}}
                    disabled={isFormValid}
                    onClick={handleRegister}
                    />
            </div>
        </Tooltip>
        <RedirectInfo
            text='Already have an account? '
            redirectText='Log In'
            additionalStyles={{ marginTop: '14px'}}
            redirectHandler={handlepushtoLoginpage}
        />
    </>
  )
}

export default RegisterPagefooter
