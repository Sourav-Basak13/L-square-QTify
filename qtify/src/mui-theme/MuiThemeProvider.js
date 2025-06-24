import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary: {
      main: "#34c94b",
    },
    dark: "#121212",
    white: "#ffffff",
    text: {
      primary: "#ffffff",
    },
    background: {
      default: "#121212",
    },
  },
});

const MuiThemeProvider = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MuiThemeProvider;
