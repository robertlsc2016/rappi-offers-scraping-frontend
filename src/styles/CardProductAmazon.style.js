import { Box } from "@mui/material";
import styled from "styled-components";

export const S_CardProductAmazonContainer = styled(Box)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: #e9e9e9;
  border-radius: ${({ theme }) => theme.border_radius.medium};
  
  width: 120px;
  height: 220px !important;
  
  padding: 8px;
  gap: 8px;

  @media (max-width: 600px) {
    height: 150px !important;
  }
`;

export const S_ImgBox = styled(Box)`
  width: 100%;
  height: 50%;
  /* border: 1px solid black; */

  img {
    /* border: 1px solid black; */
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 600px) {
    height: 30%;
  }
`;

export const S_DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  gap: 8px;

  div {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    font-weight: bold;
    /* border: 1px solid black; */
  }

  div > p:first-child {
    font-weight: bold;
    margin: 0;
    padding: 0;

    font-size: 12px;

    height: 60%;
    width: 100%;

    white-space: initial;
    overflow: hidden;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Número de linhas que você quer exibir */
    -webkit-box-orient: vertical;

    text-overflow: ellipsis;
  }

  div > a > p {
    margin: 0;
    padding: 0;
    font-size: 12px;
    height: auto;
  }
`;
