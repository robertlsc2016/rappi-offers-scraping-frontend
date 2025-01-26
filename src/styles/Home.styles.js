import { IconButton } from "@mui/material";
import styled from "styled-components";

export const S_IconButton = styled(IconButton)`
  &.MuiIconButton-root {
    z-index: 1000;
    cursor: pointer;
    background: #e9e9e9;
    position: fixed;
    top: 32px;
    left: 32px;
  }

  @media (max-width: 700px) {
    &.MuiIconButton-root {
      display: none;
    }
  }
`;

export const S_containerStores = styled.div`
  display: flex;
  flex-direction: column;

  scroll-margin-top: 28vh;
  gap: 24px;

  justify-content: center;
  align-items: center;
  width: fit-content;

  h1 {
    width: 100%;
    max-width: 1278px;
    text-align: start;
  }

  width: 100%;

  @media (max-width: 300px) {
    scroll-margin-top: 40vh;
  }

  @media (max-width: 400px) {
    scroll-margin-top: 35vh;
  }
`;

export const S_BoxStores = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 230px);
  gap: 16px;
  height: fit-content;
  width: fit-content;
  max-width: 1278px;
  align-items: start;

  min-width: fit-content;

  @media (max-width: 600px) {
    justify-content: center;
    grid-template-columns: 1fr;
  }

  @media (min-width: 600px) and (max-width: 930px) {
    grid-template-columns: auto auto;
    justify-content: center;
  }

  @media (min-width: 930px) and (max-width: 1200px) {
    grid-template-columns: auto auto auto;
    justify-content: center;
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    grid-template-columns: auto auto auto auto;
    justify-content: center;
  }

  @media (min-width: 1400px) {
    grid-template-columns: auto auto auto auto auto;
    justify-content: center;
  }
`;

export const S_GlobalContainer = styled.div`
  padding-bottom: 27vh;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const S_HeaderContainer = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;

  z-index: 100;
  padding-top: 10px;
`;

export const S_Header = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  background: white;
  transition: width 0.5s ease, height 0.5ms ease;

  /* border: 1px solid; */
  gap: 8px;
  width: 50%;
  height: auto;
  padding: 16px;
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 4px 50px 5px;

  @media (max-width: 700px) {
    width: 95%;
  }
`;

export const S_SearchbarContainer = styled.div`
  width: 80%;
  /* border: 1px solid; */
`;

export const S_ContainerChips = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  column-gap: 16px;
  row-gap: 8px;
  width: 100%;
  height: 50px;
  overflow-x: auto; /* Habilita scroll horizontal */
  white-space: nowrap; /* Garante que o conteúdo não quebre linhas */

  /* border-radius: 8px; */
  /* background-color: white; */
  /* border: 1px solid #ccc; */
  /* border: 1px solid #ccc; */

  //box-shadow: inset -10px 0 15px -10px rgba(0, 0, 0, 0.2);  /* Estilização do scroll */
  
  &::-webkit-scrollbar {
    height: 6px; /* Para o scroll horizontal */
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  /* Para navegadores que suportam scrollbar-color */
  scrollbar-color: #888 #f1f1f1; /* thumb | track */
  scrollbar-width: thin; /* Para navegadores Firefox */
`;

export const S_BodyHomeContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 10%;
  margin-top: 235px;
`;

export const S_BodyHomeBox = styled.div`
  /* border: 1px solid; */
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: 100%;
  height: auto;
`;

export const S_BodyHomeInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15vh;
  /* border: 1px solid; */
`;

export const S_BodyHomeBoxInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
