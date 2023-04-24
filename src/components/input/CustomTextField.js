import React from 'react'
import TextField from '@mui/material/TextField'

export default function CustomTextField({ label, value, onChange, ...props }) {
    return (
        <TextField
            type='text'
            label={label}
            color="info"
            size="small"
            fullWidth
            value={value}
            onChange={onChange}
            sx={{
                fieldset: { borderColor: "var(--primary-color)" },
            }}
            {...props}
        />
    )
}
