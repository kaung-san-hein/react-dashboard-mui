import React from 'react'
import TextField from '@mui/material/TextField'

export default function CustomTextField({ label, value, onChange }) {
    return (
        <TextField
            type='text'
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
        />
    )
}
