import { forwardRef } from 'react'
import { TextField } from '@mui/material'

interface InputType {
    name: string,
    placeholder: string 
}

const Input = forwardRef((props: InputType,ref) => {
  return (
    <TextField
        id="outlined-basic" 
        label="Outlined" 
        variant="outlined" 
        margin="normal" 
        inputRef={ref} 
        fullWidth 
        type='text' 
        {...props} // spread operator
    >

    </TextField>
  )
});

export  default Input