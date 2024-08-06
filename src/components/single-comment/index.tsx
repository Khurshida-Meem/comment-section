import { Avatar, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import replyIcon from "../../assets/images/icon-reply.svg";
import HorizontalElementLayout from "../horizontal-element-layout";
import deleteIcon from "../../assets/images/icon-delete.svg";
import editIcon from "../../assets/images/icon-edit.svg";
import CreateComment from "../create-comment";

const SingleComment = ({ dto, currentUser }: any) => {
  return (
    <>
      <div
        style={{ maxWidth: "700px" }}
        className="bg-white rounded-md p-3 mt-3"
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={1}>
            <div style={{ maxWidth: "35px" }} className="light_bg rounded-lg">
              <div>
                <AddIcon
                  className="pointer"
                  sx={{ fontSize: "14px", color: "darkgray" }}
                />
              </div>
              <div className="text-sm my-1 primary font-semibold">
                {dto?.score}
              </div>
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
                      textClass: "font-semibold my-2 mx-3 dark_primary",
                    },
                    {
                      text:
                        currentUser.username === dto?.user?.username
                          ? "You"
                          : "",
                      textClass:
                        currentUser.username === dto?.user?.username
                          ? "mr-3 bg_primary text-white text-xs font-semibold rounded px-2 py-0.5"
                          : "",
                    },
                    {
                      text: dto?.createdAt,
                      textClass: "text-xs light_primary",
                    },
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
                          textClass: "text-sm font-semibold error_primary ml-1",
                        },
                      ]}
                    />
                    <HorizontalElementLayout
                      containerClass="pointer"
                      isImage={true}
                      image={editIcon}
                      textList={[
                        {
                          text: "Edit",
                          textClass: "text-sm font-semibold primary ml-1",
                        },
                      ]}
                    />
                  </div>
                ) : (
                  <HorizontalElementLayout
                    containerClass="pointer"
                    isImage={true}
                    image={replyIcon}
                    textList={[
                      {
                        text: "Reply",
                        textClass: "text-sm font-semibold primary ml-1",
                      },
                    ]}
                  />
                )}
              </div>
            </div>
            <div>
              <p className="mt-1 ml-3 light_primary text-sm">
                <span className="primary font-semibold pointer">
                  {dto?.replyingTo && `@${dto?.replyingTo}`}
                </span>{" "}
                {dto?.content}
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      <CreateComment title="Send" />
    </>
  );
};

export default SingleComment;
