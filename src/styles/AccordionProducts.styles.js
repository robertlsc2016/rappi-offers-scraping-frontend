import { Accordion } from "@mui/material";
import styled from "styled-components";

export const SAccordionProducts = styled(Accordion)`
  border-radius: 16px;
  border: none !important;

  /* * {
    background: none !important;
    border: none !important;
  } */

  &.MuiAccordionDetails-root {
    background: red !important;
  }

  * {
    /* background: none !important; */
    /* border: none !important; */
    box-shadow: none !important;
  }

  &.MuiAccordion-root {
    /* * {
      background: none !important;
      border: none !important;
    } */
  }

  &.MuiAccordion-region {
    * {
      background: none !important;
      border: none !important;
      box-shadow: none !important;
      --Paper-shadow: none;
    }
  }

  &.MuiAccordionDetails-root {
    * {
      background: none !important;
      border: none !important;
    }
  }

  ::before {
    * {
      background: none !important;
      border: none !important;
    }
  }
`;
