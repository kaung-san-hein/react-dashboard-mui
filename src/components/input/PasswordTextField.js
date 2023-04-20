import React, { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function PasswordTextField({ label, value, onChange }) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      label={label}
      color="info"
      size="small"
      fullWidth
      margin="normal"
      value={value}
      onChange={onChange}
      sx={{
        fieldset: { borderColor: "var(--primary-color)" },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}
