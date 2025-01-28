import styled from "styled-components";

export const S_ContainerSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  height: auto;
  width: 100vw;

  padding: 0 10%;
  z-index: 100;

  /* border: 2px solid green; */

  @media (max-width: 500px) {
    padding: 0px 8px;
  }
`;

export const S_SearchbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 1200px;

  flex-direction: column;

  gap: 4px;
  width: 100%;

  min-height: 64px;

  padding: 0px 24px;

  max-width: 1200px;

  background: white;
  transition: width 0.5s ease, height 0.5ms ease;

  border-radius: 16px 16px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 4px 50px 5px;
`;

export const S_SearchBarBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  /* background: white; */
  /* width: 100%; */
  height: 100%;
  width: 100%;

  /* border: 2px solid green; */

  max-width: 450px;
  /* border-radius: 8px; */

  input {
    font-size: 16px;
    width: 100%;
    height: 100%;
    background-color: transparent !important;
    color: inherit !important;
  }

  input:-webkit-autofill {
    background-color: transparent !important;
    color: inherit !important;
    box-shadow: 0 0 0px 1000px white inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
