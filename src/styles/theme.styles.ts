import {  Theme } from "@mui/material";
import {createTheme} from "@mui/material/styles"
import { cyan } from "@mui/material/colors";
// import { responsiveFontSizes } from "@mui/material";
//  import { red } from "@mui/material/colors";
// interface PaletteColor {
//   light?: string;
//   main: string;
//   dark?: string;
//   contrastText?: string;
// }




export const  theme:Theme = createTheme({
  palette: {
    // type1: "dark",
    primary: cyan,
    secondary: cyan,
    mode: 'dark',
  },
});
