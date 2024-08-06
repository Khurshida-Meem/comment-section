import React, { useState } from "react";
import { dummyData } from "./dummyData";
import CommentCard from "./comment-card";
import { Divider, Grid } from "@mui/material";
import { CTextField } from "../../components/inputs";
import { useForm } from "react-hook-form";

const AllComments = () => {
  const [data, setData] = useState(dummyData);

  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <center className="mt-8">
      {data?.comments?.map((dto, idx) => (
        <div style={{ maxWidth: "700px" }} key={idx}>
          <CommentCard dto={dto} currentUser={dummyData?.currentUser} />
          {dto?.replies?.length > 0 && (
            <Grid container>
              <Grid item md={1}>
                <Divider
                  sx={{ mx: 3 }}
                  orientation="vertical"
                  variant="middle"
                />
              </Grid>
              <Grid item md={11}>
                {dto?.replies?.map((reply, replyidx) => (
                  <div key={replyidx}>
                    <CommentCard
                      dto={reply}
                      currentUser={dummyData?.currentUser}
                    />
                  </div>
                ))}
              </Grid>
            </Grid>
          )}
          <CTextField
            name="field"
            control={control}
            label="Last Name"
            rules={{ required: "Last name is required" }}
          />
        </div>
      ))}
    </center>
  );
};

export default AllComments;
