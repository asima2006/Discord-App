import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
});

const Label = styled('p')({
    color: '#b9bbbe',
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: '16px',
});

const Input = styled('input')({
    flexGrow: 1,
    height: '40px',
    border: '1px solid #4b6374',
    borderRadius: '5px',
    color: '#dcddde',
    background: '#35393f',
    margin: 0,
    fontSize: '16px',
    padding: '0 12px',
});

const InputwithLabelWise = (props) => {
    const { value, setValue, label, type, placeholder} = props;

    const handleValueChange = (event)=>{
        setValue(event.target.value);
    }
  return (
    <Wrapper>
        <Label>{label}</Label>
        <Input
            value = {value}
            onChange={handleValueChange}
            type={type}
            placeholder={placeholder}
        />
    </Wrapper>
  )
}

export default InputwithLabelWise
