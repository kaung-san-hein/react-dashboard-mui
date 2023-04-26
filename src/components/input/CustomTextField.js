import React from 'react'
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types';

const CustomTextField = ({ label, value, onChange, ...props }) => {
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

CustomTextField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default CustomTextField