import { Card, Typography } from "@mui/material";
import styled from "styled-components";

export const S_Card = styled(Card)`

  border-radius: 16px !important;

  border: 1px solid rgba(130, 130, 130, 0.21);

  width: 96px;
  height: auto;


  * {
    text-transform: capitalize !important;
  }
`;

export const S_Typography = styled(Typography)`
  font-weight: 400 !important;
  font-size: 12px !important;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  width: 100%;
`;
