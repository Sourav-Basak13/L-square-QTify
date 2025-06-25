import { Button, styled } from "@mui/material";

export const StyledNavButton = styled(Button)`
  padding: 0px;
  border-radius: 100%;
  min-width: fit-content;
  width: 32px !important;
  height: 32px !important;
  ::after {
    content: "" !important;
  }
`;
