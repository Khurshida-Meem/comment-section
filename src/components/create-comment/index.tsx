import { Avatar } from "@mui/material";
import React from "react";
import { CTextField } from "../inputs";
import { useForm } from "react-hook-form";

interface propType {
  title: string;
  userImg: string;
  onSubmit?: any;
}

const CreateComment = ({ title, userImg, onSubmit }: propType) => {
  const { handleSubmit, control } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white mt-3 p-4 rounded-md">
        <div className="flex">
          <Avatar alt={"user"} src={userImg} sx={{ width: 30, height: 30 }} />
          <div className="w-full px-3">
            <CTextField
              name="commentField"
              control={control}
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
