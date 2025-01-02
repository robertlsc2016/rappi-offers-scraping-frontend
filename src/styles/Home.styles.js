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
`;

export const S_containerStores = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const S_BoxStores = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  height: fit-content;
  width: fit-content;
  gap: 32px;
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
  top: 0;
  width: 100%;
  height: 25vh;
  // padding: 16px;
  z-index: 100;
  /* border: 1px solid; */
  // border-radius: 50px;
`;

export const S_Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: white;

  /* border: 1px solid; */
  gap: 16px;
  width: 50%;
  padding: 16px;
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 4px 50px 5px;
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
