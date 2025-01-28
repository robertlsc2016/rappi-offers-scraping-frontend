import { Card, Typography } from "@mui/material";
import styled from "styled-components";

export const S_Card = styled(Card)`
  height: auto;
  width: 164px;

  * {
    text-transform: capitalize !important;
  }
`;

export const S_Typography = styled(Typography)`
  font-weight: 400 !important;
  font-size: 20px !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
