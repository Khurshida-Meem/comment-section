import { Avatar, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import replyIcon from "../../assets/images/icon-reply.svg";
import HorizontalElementLayout from "../../components/horizontal-element-layout";
import deleteIcon from "../../assets/images/icon-delete.svg";
import editIcon from "../../assets/images/icon-edit.svg";

const CommentCard = ({ dto, currentUser }: any) => {
  return (
    <div style={{ maxWidth: "700px" }} className="bg-white pa3 br3 mt3">
      <Grid container>
        <Grid item md={1}>
          <div style={{ maxWidth: "35px" }} className="light_bg br4 pv2 tc">
            <div>
              <AddIcon
                className="pointer"
                sx={{ fontSize: "14px", color: "darkgray" }}
              />
            </div>
            <div className="mv2 b moderate_blue">{dto?.score}</div>
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
                  { text: dto?.createdAt, textClass: "" },
                ]}
              />
            </div>
            <div>
              {currentUser.username === dto?.user?.username ? (
                <div className="flex">
                  <HorizontalElementLayout
                    containerClass="mr3"
                    isImage={true}
                    image={deleteIcon}
                    textList={[{ text: "Delete", textClass: "ml1 b soft_red" }]}
                  />
                  <HorizontalElementLayout
                    isImage={true}
                    image={editIcon}
                    textList={[
                      { text: "Edit", textClass: "ml1 b moderate_blue" },
                    ]}
                  />
                </div>
              ) : (
                <HorizontalElementLayout
                  isImage={true}
                  image={replyIcon}
                  textList={[
                    { text: "Reply", textClass: "ml1 b moderate_blue" },
                  ]}
                />
              )}
            </div>
          </div>
          <div>
            <p className="mt2">{dto?.content}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CommentCard;
