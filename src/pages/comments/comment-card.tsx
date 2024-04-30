import { Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CommentCard = () => {
  return (
    <center className="mt5">
      <div className="w-50 bg-white pa3 br3">
        <Grid container>
          <Grid item md={1}>
            <div style={{ maxWidth: "40px" }} className="light_bg br4 pv2">
              <div>
                <AddIcon className="pointer" sx={{ fontSize: "14px" }} />
              </div>
              <div className="mv2">1</div>
              <div>
                <RemoveIcon className="pointer" sx={{ fontSize: "14px" }} />
              </div>
            </div>
          </Grid>
          <Grid item md={11}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            pariatur nemo corporis! Consectetur modi quia cupiditate ut unde vel
          </Grid>
        </Grid>
      </div>
    </center>
  );
};

export default CommentCard;
