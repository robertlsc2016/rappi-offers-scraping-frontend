import { Box, Grid2, Modal } from "@mui/material";
import styled from "styled-components";

export const S_ModalContainer = styled(Modal)``;

export const S_ModalInner = styled(Box)`
  &.MuiBox-root {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 24px;
  }
`;

export const S_ModalInnerBox1 = styled(Grid2)`
  width: 70vw;
  height: 80vh;
  background: white;
  border-radius: 16px;
  padding: 24px;

  @media (max-width: 600px) {
    width: 85vw;
  }
  /* border: 1px solid black; */
`;

export const S_GridImage = styled(Grid2)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #e9e9e9;
  border-radius: 16px;
  height: 100%;
  padding: 32px;
  /* border: 1px solid black; */

  @media (max-width: 600px) {
    height: 40%;
  }
`;

export const S_GridDescriptionContainer = styled(Grid2)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 16px;
  height: 100%;
  /* border: 2px solid black; */

  @media (max-width: 600px) {
    height: 60%;
  }
`;

export const S_GridDescriptionBox = styled(Box)`
  /* border: 1px solid black; */
  gap: 6px;
  display: flex;
  flex-direction: column;
`;

export const S_GridDescriptionrBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid black; */
  gap: 16px;

  p {
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

export const S_SimilarProductsAmazonContainer = styled(Box)`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  /* border: 1px solid black; */

  h2 {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1rem; /* Diminui o tamanho base em telas menores */
    }
  }
`;

export const S_TitleProduct = styled.h1`
  font-size: 2.5rem;
  margin: 0;

  @media (min-width: 0px) {
    font-size: 1rem; /* Diminui o tamanho base em telas menores */
  }

  @media (min-width: 600px) {
    font-size: 1.4rem; /* Diminui o tamanho base em telas menores */
  }

  @media (min-width: 800px) {
    font-size: 1.6rem; /* Diminui o tamanho base em telas menores */
  }
  @media (min-width: 1000px) {
    font-size: 1.8rem; /* Diminui o tamanho base em telas menores */
  }
`;
