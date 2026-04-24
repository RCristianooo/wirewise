import React from 'react'
import TextField from '@mui/material/TextField';

type Props = {
    name: string;
    type: string;
    label: string;
}
const CustomizedInput = (props: Props) => {
  return (
  <TextField
    margin="normal"
    name={props.name}
    label={props.label}
    type={props.type}
    sx={{
      width: "400px",

      // Label
      "& .MuiInputLabel-root": {
        color: "white",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "white",
      },

      // Input text
      "& .MuiInputBase-input": {
        color: "white",
        fontSize: 20,
      },

      // Outlined border (if using default variant)
      "& .MuiOutlinedInput-root": {
        borderRadius: "10px",
        "& fieldset": {
          borderColor: "white",
        },
        "&:hover fieldset": {
          borderColor: "white",
        },
        "&.Mui-focused fieldset": {
          borderColor: "white",
        },
      },
    }}
  />
);
};

export default CustomizedInput