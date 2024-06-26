import { FormControl, FormHelperText, OutlinedInput } from "@mui/material";

export const CTextField = () => {
  return (
    <FormControl sx={{ width: "25ch" }}>
      <OutlinedInput placeholder="Please enter text" />
      <FormHelperText>"helper"</FormHelperText>
    </FormControl>
  );
};
