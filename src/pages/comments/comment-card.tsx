import { Avatar, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import replyIcon from "../../assets/images/icon-reply.svg";
import HorizontalElementLayout from "../../components/horizontal-element-layout";
import deleteIcon from "../../assets/images/icon-delete.svg";
import editIcon from "../../assets/images/icon-edit.svg";

const CommentCard = ({ dto, currentUser }: any) => {
  return (
    <div style={{ maxWidth: "700px" }} className="bg-white p-3 mt-3">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={1}>
          <div style={{ maxWidth: "35px" }} className="light_bg rounded-lg">
            <div>
              <AddIcon sx={{ fontSize: "14px", color: "darkgray" }} />
            </div>
            <div className="my-1 primary font-semibold">{dto?.score}</div>
            <div>
              <RemoveIcon sx={{ fontSize: "14px", color: "darkgray" }} />
            </div>
          </div>
        </Grid>
        <Grid item md={11} sx={{ textAlign: "initial" }}>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <HorizontalElementLayout
                containerClass="ml-3"
                isAvatar={true}
                avatar={
                  <Avatar
                    alt={dto?.user?.username}
                    src={dto?.user?.image?.png}
                    sx={{ width: 30, height: 30 }}
                  />
                }
                textList={[
                  {
                    text: dto?.user?.username,
                    textClass: "font-semibold my-2 mx-3",
                  },
                  { text: dto?.createdAt, textClass: "" },
                ]}
              />
            </div>
            <div>
              {currentUser.username === dto?.user?.username ? (
                <div className="flex">
                  <HorizontalElementLayout
                    containerClass="mr-3 pointer"
                    isImage={true}
                    image={deleteIcon}
                    textList={[
                      {
                        text: "Delete",
                        textClass: "font-semibold error_primary ml-1",
                      },
                    ]}
                  />
                  <HorizontalElementLayout
                    containerClass="pointer"
                    isImage={true}
                    image={editIcon}
                    textList={[
                      { text: "Edit", textClass: "font-semibold primary ml-1" },
                    ]}
                  />
                </div>
              ) : (
                <HorizontalElementLayout
                  containerClass="pointer"
                  isImage={true}
                  image={replyIcon}
                  textList={[
                    { text: "Reply", textClass: "font-semibold primary ml-1" },
                  ]}
                />
              )}
            </div>
          </div>
          <div>
            <p className="mt-2 ml-3">{dto?.content}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CommentCard;
