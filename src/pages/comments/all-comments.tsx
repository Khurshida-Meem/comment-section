import React, { useState } from "react";
import { dummyData } from "./dummyData";
import CommentCard from "./comment-card";
import { Divider, Grid } from "@mui/material";
import { CTextField } from "../../components/inputs";

const AllComments = () => {
  const [data, setData] = useState(dummyData);

  return (
    <center className="mt5">
      {data?.comments?.map((dto, idx) => (
        <div style={{ maxWidth: "700px" }} key={idx}>
          <CommentCard dto={dto} />
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
                    <CommentCard dto={reply} />
                  </div>
                ))}
              </Grid>
            </Grid>
          )}
          <CTextField />
        </div>
      ))}
    </center>
  );
};

export default AllComments;
