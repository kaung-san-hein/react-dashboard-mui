import CardMedia from '@mui/material/CardMedia'
import InputAdornment from '@mui/material/InputAdornment'
import Stack from '@mui/material/Stack'
import flag from '../../assets/images/flag.png'
import CustomTextField from './CustomTextField'

const withPhoneNumberTextField = (Component) => {
    return (props) => {
        return (
            <Component
                {...props}
                placeholder="9000000000"
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
}

export const PhoneNumberTextField = withPhoneNumberTextField(CustomTextField)
