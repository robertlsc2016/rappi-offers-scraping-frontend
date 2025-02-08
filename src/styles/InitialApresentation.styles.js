import styled from "styled-components";

export const SInitialApresentation = styled.div`
  position: fixed;
  top: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: #242527;

  /* border: 1px solid; */
  /* background: white; */
  color: rgb(0, 0, 0);
  z-index: 1000;

  overflow: hidden;

  width: 100vw;
  height: 100%;
  padding: 32px;
  touch-action: none;
`;

export const STitle = styled.h1`
  font-size: 256px;
  font-family: Kanit, serif;
  font-weight: bold;
  text-align: center;
  /* border: 1px solid black; */
  line-height: 256px;

  @media (max-width: 500px) {
    font-size: 64px;
    line-height: 64px;
  }
`;

export const SSubTitle = styled.h2`
  text-align: center;
  font-family: Kanit, serif;
  font-weight: lighter;
  height: auto;
  /* text-align: start; */
  font-size: 32px;
  padding: 0px;
  color: white;
  /* border: 1px solid black; */

  @media (max-width: 500px) {
    font-size: 16px;
    line-height: 16px;
  }
`;
