import { AccordionDetails } from "@mui/material";
import styled from "styled-components";

export const S_AccordionDetails = styled(AccordionDetails)`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: "";
    flex: auto;
  }
`;
