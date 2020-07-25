import React, { useEffect, useState, useContext } from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  CardActions,
  CardActionArea,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import shoes from "./shoesapi.json";
import StoreContext from "../StoreContext";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: 40,
  },
  root1: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
  myMargin: {
    left: 0,
  },
  myPadding: {
    padding: 16,
  },
}));
function Shoes() {
  const classes = useStyles();
  const [shoe, setShoe] = useState();
  const { dispatch } = useContext(StoreContext);

  useEffect(function () {
    async function fetchData() {
      let data = await shoes;
      setShoe(data);
    }
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      {" "}
      <Grid container spacing={0}>
        {!shoe
          ? "Loading"
          : Object.keys(shoe).map((val, key) => {
              const index = shoe[val];
              return (
                <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
                  <Card className={classes.myPadding}>
                    <Link className="myLink" to={`/Product/${val}`}>
                      <Card>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={index.imageURL}
                            title={index.name}
                          />
                          <CardContent>
                            <Typography variant="h5" component="h5">
                              {index.name}
                            </Typography>
                            <Typography variant="h6" component="h5">
                              Rs - {index.price}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Link>
                    <CardActions>
                      <IconButton
                        className={classes.myMargin}
                        aria-label="show 4 new mails"
                        color="inherit"
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
                      >
                        <AddShoppingCartIcon />
                      </IconButton>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {"Add To Cart"}
                      </Typography>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
      </Grid>
    </div>
  );
}

export default Shoes;
