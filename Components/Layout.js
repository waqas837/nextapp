import React, { useContext } from "react";
import { createTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
  ThemeProvider,
  Button,
} from "@material-ui/core";
import Head from "next/head";
import Nextlink from "next/link";
import { useStyles } from "../utils/customStyles";
import { StoreContext } from "../utils/Store";
export default function Layout({ children, title }) {
  const classes = useStyles();
  const { state, dispatch } = useContext(StoreContext);
  //  . or destructure from object
  const { darkMode } = state;
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#234523",
      },
      secondary: {
        main: "#234234",
      },
    },
  });
  return (
    // mostly repeated code..
    <div>
      <Head>{title ? <title>{title}!</title> : <title>Amazona!</title>}</Head>
      <ThemeProvider theme={theme}>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <Nextlink href="/" passHref>
              <Link>
                <Typography color="inherit" variant="h5">
                  Amazona!
                </Typography>
              </Link>
            </Nextlink>
            <div className={classes.grow}></div>
            <Button onClick={() => dispatch({ type: "darkModeOn" })}>
              DarkMode
            </Button>
            <Button onClick={() => dispatch({ type: "darkModeOff" })}>
              LightMode
            </Button>
            <Nextlink href="/login" passHref>
              <Link>
                <Typography color="inherit" variant="body2">
                  Login
                </Typography>
              </Link>
            </Nextlink>{" "}
            &nbsp;&nbsp;
            <Nextlink href="/cart" passHref>
              <Link>
                <Typography color="inherit" variant="body2">
                  Cart
                </Typography>
              </Link>
            </Nextlink>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Container className={classes.container}>{children}</Container>
      <footer className={classes.footer}>
        <Typography variant="h5">All right reserved 2021 NextJs</Typography>
      </footer>
    </div>
  );
}
