import { makeStyles } from "@mui/material/styles";

import { theme } from "./theme.styles";

export const useStyle = makeStyles(() => ({
  root: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },

  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
 
}));
