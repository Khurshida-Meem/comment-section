import React, { useState } from "react";
import { dummyData } from "./dummyData";
import { Divider, Grid } from "@mui/material";
import SingleComment from "../../components/single-comment";

const AllComments = () => {
  const [data, setData] = useState(dummyData);

  return (
    <center className="mt-8">
      {data?.comments?.map((dto, idx) => (
        <div style={{ maxWidth: "700px" }} key={idx}>
          <SingleComment dto={dto} currentUser={dummyData?.currentUser} />
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
                    <SingleComment
                      dto={reply}
                      currentUser={dummyData?.currentUser}
                    />
                  </div>
                ))}
              </Grid>
            </Grid>
          )}
        </div>
      ))}
    </center>
  );
};

export default AllComments;
