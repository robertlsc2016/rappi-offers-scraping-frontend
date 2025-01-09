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
    /* border: 1px solid; */
  }

  @media (max-width: 700px) {
    &.MuiIconButton-root {
      display: none;
    }
  }
`;

export const S_containerStores = styled.div`
  scroll-margin-top: 28vh;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 400px) {
    scroll-margin-top: 32vh;
  }
`;

export const S_BoxStores = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  height: fit-content;
  width: fit-content;
  /* gap: 32px; */

  &::after {
    content: "";
    justify-content: auto;
  }

  @media (max-width: 650px) {
    justify-content: center;
  }

  @media (max-width: 700px) {
    justify-content: center;
    gap: 16px;

    &::after {
      content: none;
      justify-content: center;
    }
  }

  @media (max-width: 1000px) {
    justify-content: center;
    gap: 24px;
  }
`;

export const S_GlobalContainer = styled.div`
  /* border: 1px solid; */
  padding-bottom: 27vh;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  /* border: 1px solid; */
`;

export const S_HeaderContainer = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 25vh; */
  height: auto;

  z-index: 100;

  /* border: 1px solid; */
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
  width: 100%;
`;

export const S_BodyHomeContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  /* border: 1px solid; */
  padding: 0 10%;
  /* background: red; */
  margin-top: 28vh;

  @media (max-width: 400px) {
    margin-top: 32vh;
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
