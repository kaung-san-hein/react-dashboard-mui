import CardMedia from '@mui/material/CardMedia'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Stack from '@mui/material/Stack'
import flag from '../../assets/images/flag.png'

export default function PhoneNumberTextField({ value, onChange }) {
  return (
    <TextField
      type="text"
      label="Phone Number"
      color="info"
      size="small"
      fullWidth
      margin="normal"
      value={value}
      onChange={onChange}
      placeholder="09-000000000"
      sx={{
        fieldset: { borderColor: "var(--primary-color)" },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-around"
              gap={1}
            >
              <CardMedia
                component="img"
                alt="flag"
                image={flag}
                title="flag"
              />
              <p>+95</p>
            </Stack>
          </InputAdornment>
        ),
      }}
    />
  )
}
