import { IconButton } from "@mui/material";
import styled from "styled-components";

export const S_ContainerButtonAbsolute = styled.div`
  display: flex;
  gap: 16px;
  z-index: 1000;
  cursor: pointer;

  margin-top: 8px;
  border-radius: ${({ theme }) => theme.border_radius.medium};
  padding: 0px 8px;

  width: auto;
  height: auto;
`;

export const S_IconButton = styled(IconButton)`
  &.MuiIconButton-root {
    color: white;
    cursor: pointer;
    background: #0288d1;
  }
`;

export const S_containerStores = styled.div`
  display: flex;
  flex-direction: column;

  /* border: 1px solid black; */

  width: 100%;
  max-width: 1250px;

  scroll-margin-top: 48px;
  gap: 24px;

  justify-content: center;
  align-items: center;
  /* width: fit-content; */

  h1 {
    width: 100%;
    max-width: 1250px;
    text-align: start;
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
    grid-template-columns: auto auto auto auto;
    justify-content: center;
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    grid-template-columns: auto auto auto auto auto;
    justify-content: center;
  }

  @media (min-width: 1400px) {
    grid-template-columns: auto auto auto auto auto;
    justify-content: center;
  }
`;

export const S_GlobalContainer = styled.div`
  padding-bottom: 27vh;

  /* background-color: red; */

  width: 100%;
  max-width: 1200px;

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

  /* background-color: white; */

  width: 100%;
  height: auto;
  gap: 8px;
  z-index: 100;

  position: fixed;
  bottom: 0;
`;

export const S_Header = styled.div`
  display: flex;
  justify-content: space-between;

  flex-direction: column;
  align-items: center;

  /* border: 1px solid; */

  background: white;
  transition: width 0.5s ease, height 0.5ms ease;

  /* border: 1px solid; */
  gap: 8px;
  width: 50%;

  height: auto;
  padding: 4px;

  border-radius: 32px 32px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 4px 50px 5px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const S_BodyHomeContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  /* padding: 0 8px; */
  margin-top: 64px;

  /* border: 1px solid black; */

  @media (max-width: 500px) {
    /* width: 100%; */
    padding: 0px 8px;
  }
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
