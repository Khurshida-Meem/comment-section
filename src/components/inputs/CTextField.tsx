import { TextField } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

interface FormInputProps {
  name: string;
  control: Control<FieldValues>;
  label?: string;
  defaultValue?: string;
  rules?: object;
}

export const CTextField = ({
  name,
  control,
  label,
  defaultValue,
  rules,
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          error={!!error}
          helperText={error ? error.message : ""}
          fullWidth
        />
      )}
    />
  );
};
