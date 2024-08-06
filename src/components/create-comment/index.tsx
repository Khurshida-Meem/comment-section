import { Avatar } from "@mui/material";
import React from "react";
import { CTextField } from "../inputs";
import { useForm } from "react-hook-form";

interface propType {
  title: string;
}

const CreateComment = ({ title }: propType) => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white mt-2">
        <div className="flex">
          <Avatar
            alt={"as"}
            //   src={}
            sx={{ width: 30, height: 30 }}
          />
          <div className="w-full">
            <CTextField
              name="field"
              control={control}
              label="Last Name"
              size="small"
              isMultiLine={true}
            />
          </div>
          <div>
            <button type="submit" className="button_prime">
              {title}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateComment;
