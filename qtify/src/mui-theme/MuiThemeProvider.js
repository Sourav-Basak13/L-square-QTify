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
      main: "#34C94b",
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
  components: {
    MuiAccordion: {
      defaultProps: {
        sx: {
          background: "transparent",
          borderRadius: "10px !important",
          "&.Mui-expanded": {
            margin: "0px",
            background: "#ffffff",
          },
          ".MuiAccordionSummary-root": {
            height: "78px",
            borderRadius: "10px",
            borderWidth: "1px",
            background: "#121212",
            border: "1px solid #ffffff",
          },

          ".MuiAccordionSummary-expandIconWrapper": {
            color: "#34c94b",
            fontWeight: 900,
            fontSize: "40px",
            lineHeight: "100%",
            letterSpacing: "0.15px",
            textAlign: "right",
          },
          ".MuiAccordionDetails-root": {
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            padding: "16px",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "100%",
            letterSpacing: "0px",
            color: "#121212",
          },
        },
      },
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
