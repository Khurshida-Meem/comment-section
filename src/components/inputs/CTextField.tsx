import { OutlinedInput } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

interface FormInputProps {
  name: string;
  control: Control<FieldValues>;
  label?: string;
  defaultValue?: string;
  rules?: object;
  size?: "medium" | "small";
  isMultiLine?: true | false;
}

export const CTextField = ({
  name,
  control,
  label,
  defaultValue,
  rules,
  size = "medium",
  isMultiLine = false,
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <OutlinedInput
          {...field}
          error={!!error}
          fullWidth
          placeholder="Enter Comment"
          size={size}
          multiline={isMultiLine}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--primary)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--light-primary)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "1px solid var(--primary)",
            },
            color: "var(--primary)",
            fontSize: "14px",
          }}
        />
      )}
    />
  );
};
