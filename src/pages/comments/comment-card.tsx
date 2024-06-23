import { Avatar, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CommentCard = () => {
  return (
    <center className="mt5 ">
      <div className="w-50 bg-white pa3 br3">
        <Grid container>
          <Grid item md={1}>
            <div style={{ maxWidth: "40px" }} className="light_bg br4 pv2 tc">
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
            <div>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 24, height: 24 }}
              />
              <p>ghjkl</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </center>
  );
};

export default CommentCard;
