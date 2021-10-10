import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addInvent } from "../../actions/invent";
// import Typography from "@material-ui/core/Typography";
import axios from "axios";
const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    marginTop: "40px",
  },
});
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const inventory = useSelector((state) => state.invent);
  const dispatch = useDispatch();
  console.log("trial", inventory);
  const [invent, setInvent] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    var obj = {};
    obj["product_name"] = data.get("name");
    obj["product_quantity"] = data.get("quantity");
    dispatch(addInvent(obj));

    // eslint-disable-next-line no-console
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };
  const classes = useStyles();
  if (inventory.length) {
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
            <Typography component="h1" variant="h5">
              Inventory
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                name="name"
                label="Product Name"
                type="name"
                id="name"
                autoComplete="name"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="quantity"
                label="Product quantity"
                name="quantity"
                autoComplete="quantity"
                autoFocus
              />
              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Update Inventory
              </Button>
              <Grid container></Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
        <Box
          display="flex"
          flexWrap="nowrap"
          p={0}
          m={0}
          bgcolor="background.paper"
          sx={{ maxWidth: "200" }}
        >
          {inventory.map((item, index) => {
            console.log(item.source);
            return (
              <Container>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.product_name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.product_quantity}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Container>
            );
          })}
        </Box>
      </ThemeProvider>
    );
  } else {
    return <h1>loading</h1>;
  }
}
