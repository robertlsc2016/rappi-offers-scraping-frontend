import { Button, Chip } from "@mui/material";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { theme } from "./theme";

export const S_ContainerProducts = styled.div`
  position: relative;

  /* border: 1px solid black; */

  cursor: pointer;
  box-sizing: border-box;

  padding: 5px;

  background-color: ${({ theme }) => theme.colors.default_gray};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 110px;
  /* height: auto; */
  height: 280px;
  /* height: auto; */
  /* overflow: hidden; */
  gap: 8px;
  /* border: 1px solid black; */
  border-radius: ${({ theme }) => theme.border_radius.small};

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const S_ToastContainer = styled(ToastContainer)`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  /* align-items: flex-end; */

  width: 100%;
  gap: 8px;
  --toastify-color-dark: rgb(36, 37, 39);

  margin-top: 26px;

  @media (max-width: 500px) {
    margin-top: 42px;
    --toastify-container-width: 30px !important;
    --toastify-toast-width: 30px !important;
  }
`;

export const S_Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;

  bottom: 8px;
  width: 100%;
  /* opacity: 80%; */
  z-index: 1;

  padding: 0px 4px !important;
  gap: 4px;
`;

export const S_Button = styled(Button)`
  font-size: 16px !important;
  z-index: 1000;

  ${(props) => {
    if (props.color == "orange") {
      return `min-width: 0px !important;
              width: 100% !important;
              color: ${theme.colors.default_orange} !important; 
              border: 1px solid ${theme.colors.default_orange} !important`;
    }

    if (props.color == "red") {
      return `min-width: 0px !important;
              width: 100% !important;
              color: ${theme.colors.default_red} !important; 
              border: 1px solid ${theme.colors.default_red} !important`;
    }

    if (props.color == "green") {
      return `width: 100%;
              color: ${theme.colors.default_green} !important; 
              border: 1px solid ${theme.colors.default_green} !important`;
    }
  }};
`;

export const S_Notify = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    margin: 0;
    padding: 0;
    color: white;
  }
`;

export const S_BoxImage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100px;
  padding: 4px;

  img {
    background-color: white;
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.border_radius.medium};
  }
`;

export const S_ContainerChips = styled.div`
  position: absolute !important;
  /* top: 5px; */
  /* right: 8px; */
  top: 78px;
  right: 0;

  /* font-size: 48px !important; */

  column-gap: 4px;
  row-gap: 2px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  height: 32px;
  overflow: hidden;

  padding-right: 8px;
  /* border: 1px solid black; */
  overflow: hidden;

  span {
    padding: 2px 4px !important;
  }

  opacity: 80% !important;
`;

export const S_ChipUnit = styled(Chip)`
  height: 12px !important;
  padding: 0px !important;
  font-size: 10px !important;
`;
