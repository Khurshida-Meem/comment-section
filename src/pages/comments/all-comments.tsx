import React, { useContext, useState } from "react";
import { dummyData } from "./dummyData";
import { Divider, Grid } from "@mui/material";
import SingleComment from "../../components/single-comment";
import CreateComment from "../../components/create-comment";
import { DataContext } from "../../contexts";
import { MainData } from "../../dataTypes";

const AllComments = () => {
  const data: MainData = useContext(DataContext);
  const [replyDto, setReplyDto] = useState<any>(null);
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <center className="mt-8">
      {data?.comments?.map((dto, idx: number) => (
        <div style={{ maxWidth: "700px" }} key={idx}>
          <SingleComment
            setReplyDto={setReplyDto}
            dto={dto}
            currentUser={dummyData?.currentUser}
          />

          <Grid container>
            <Grid item md={1}>
              <Divider sx={{ mx: 3 }} orientation="vertical" variant="middle" />
            </Grid>

            <Grid item md={11}>
              {dto?.replies?.length > 0 &&
                dto?.replies?.map((reply, replyidx) => (
                  <div key={replyidx}>
                    <SingleComment
                      dto={reply}
                      currentUser={dummyData?.currentUser}
                      setReplyDto={setReplyDto}
                    />
                  </div>
                ))}
              {replyDto && replyDto?.id === dto?.id && (
                <CreateComment
                  onSubmit={onSubmit}
                  userImg={data?.currentUser?.image?.png}
                  title="Send"
                />
              )}
            </Grid>
          </Grid>
        </div>
      ))}
    </center>
  );
};

export default AllComments;
