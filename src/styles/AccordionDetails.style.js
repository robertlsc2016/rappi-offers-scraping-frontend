import { AccordionDetails } from "@mui/material";
import styled from "styled-components";

export const S_AccordionDetails = styled(AccordionDetails)`
  display: flex;
  flex-direction: row;
  /* gap: 16px; */
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  /* border: 1px solid black; */
  padding: 8px !important;
  gap: 10px;

  &::after {
    content: "";
    flex: auto;
  }

  @media (max-width: 500px) {
    padding: 8px 4px !important;
  }
`;
