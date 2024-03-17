import { FormControl, FormHelperText, OutlinedInput } from "@mui/material";
import React from "react";

const CTextField = () => {
  return (
    <FormControl sx={{ width: "25ch" }}>
      <OutlinedInput placeholder="Please enter text" />
      <FormHelperText>"helper"</FormHelperText>
    </FormControl>
  );
};

export default CTextField;
