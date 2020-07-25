import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Tabs, Tab, Badge, Grid } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import StoreContext from "../StoreContext";


function Header() {
  const [value, setValue] = React.useState(0);
  const { state } = useContext(StoreContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar position="static">
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Typography
            style={{ textAlign: "center", marginTop: 9 }}
            variant="h5"
          >
            Super Store
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Home" component={Link} to={"/"} />
            <Tab label="Shoe" component={Link} to={"/Product"} />
            <Tab label="About" component={Link} to={"/about"} />
            <Tab label="Contact us" component={Link} to={"/contact"} />
            {/* <Link className='myLink' key={1} to='/about'>{ <Tab label="About" />}</Link> 
        <Link className='myLink' key={2} to='/contact'>{ <Tab label="Contact Us" />}</Link> */}
          </Tabs>
        </Grid>
        <Grid item xs={2}>
          <IconButton
            aria-label="show 4 new mails"
            color="inherit"
            component={Link}
            to={"/cart"}
          >
            <Badge badgeContent={state.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default Header;
