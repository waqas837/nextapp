import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  navbar: {
    background: "brown",
    "& a": {
      color: "white",
    },
  },
  container: {
    minHeight: "70vh",
  },
  footer: {
    textAlign: "center",
  },
  grow:{
    flexGrow:1,
  }
}));
