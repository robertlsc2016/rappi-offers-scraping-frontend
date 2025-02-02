import styled from "styled-components";

export const SearchGlobalContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;


  gap: 16px;
  height: fit-content;
  width: 100%;

  max-width: 1200px;
  /* margin-top: 48px; */

  @media (max-width: 500px) {
    padding: 0px 8px;
  }

  @media (min-width: 500px) and (max-width: 1200px) {
    padding: 0px 10%;
  }
`;

export const S_LoadingSearchGlobal = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: 1px solid black;

  /* gap: 16px; */
  width: 100%;
  height: 100vh;
`;
