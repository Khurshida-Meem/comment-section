import { Avatar, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { dummyData } from "./dummyData";
import replyIcon from "../../assets/images/icon-reply.svg";
import HorizontalElementLayout from "../../components/horizontal-element-layout";

const CommentCard = () => {
  const [data, setData] = useState(dummyData);

  return (
    <center className="mt5">
      {data?.comments?.map((dto, idx) => (
        <div key={idx} className="w-50 bg-white pa3 br3 mt3">
          <Grid container>
            <Grid item md={1}>
              <div style={{ maxWidth: "35px" }} className="light_bg br4 pv2 tc">
                <div>
                  <AddIcon
                    className="pointer"
                    sx={{ fontSize: "14px", color: "darkgray" }}
                  />
                </div>
                <div className="mv2 b blue">1</div>
                <div>
                  <RemoveIcon
                    className="pointer"
                    sx={{ fontSize: "14px", color: "darkgray" }}
                  />
                </div>
              </div>
            </Grid>
            <Grid item md={11} sx={{ textAlign: "initial" }}>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <HorizontalElementLayout
                    isAvatar={true}
                    avatar={
                      <Avatar
                        alt={dto?.user?.username}
                        src={dto?.user?.image?.png}
                        sx={{ width: 30, height: 30 }}
                      />
                    }
                    textList={[
                      { text: dto?.user?.username, textClass: "fw6 mv2 mh3" },
                    ]}
                  />
                  <Avatar
                    alt={dto?.user?.username}
                    src={dto?.user?.image?.png}
                    sx={{ width: 30, height: 30 }}
                  />
                  <p className="fw6 mv2 mh3">{dto?.user?.username}</p>
                  <small>{dto?.createdAt}</small>
                </div>
                <div>
                  <HorizontalElementLayout
                    isImage={true}
                    image={replyIcon}
                    textList={[{ text: "Reply", textClass: "ml1" }]}
                  />
                </div>
              </div>
              <div>
                <p>{dto?.content}</p>
              </div>
            </Grid>
          </Grid>
        </div>
      ))}
    </center>
  );
};

export default CommentCard;
