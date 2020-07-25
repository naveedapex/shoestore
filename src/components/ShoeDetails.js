import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { makeStyles, Paper, Grid, Typography, Button } from "@material-ui/core";
import StoreContext from "../StoreContext";
import shoes from "./shoesapi.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 40,
    marginTop: 40,
  },
  paper: {
    padding: theme.spacing(1),
    height: 500,
  },
  bImg: {
    height: 500,
  },
  pd: {
    marginTop: 12,
    marginBottom: 16,
  },
}));
function ShoesDetail() {
  let { productId } = useParams();
  const classes = useStyles();
  const { dispatch } = useContext(StoreContext);
  console.log(shoes);
  const index = shoes[productId];

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={5}>
          <Paper elevation={0} className={classes.paper}>
            <img
              src={index.imageURL}
              className={`${classes.bImg} bannerImg`}
              alt={productId}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={7}>
          <Paper elevation={0} className={classes.paper}>
            <Typography variant="h4" component="h3">
              {index.name}
            </Typography>
            <Typography variant="h5" className={classes.pd} component="h4">
              Rs - {index.price}
            </Typography>

            <hr />
            <Typography variant="h6" className={classes.pd} component="h5">
              Product Detail
            </Typography>
            <Typography
              variant="body1"
              className={classes.pd}
              color="textSecondary"
              component="p"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              Lorem ipsum dolor sit amet, Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris.
            </Typography>
            <hr />
            <Button
              onClick={(e) => {
                e.preventDefault();
                dispatch({
                  type: "ADD",
                  payload: {
                    name: index.name,
                    price: index.price,
                    img: index.imageURL,
                    key: Date.now(),
                  },
                });
              }}
              variant="contained"
              className={classes.pd}
              color="secondary"
            >
              Add To Cart
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ShoesDetail;
