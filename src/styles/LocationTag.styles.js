import styled from "styled-components";

export const S_LocationTag = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: row;
  
  width: auto;
  max-width: 100%;


  top: 0;
  height: auto;
  padding: 0px 10%;
  z-index: 500;

  @media (max-width: 500px) {
    width: 100%;
    padding: 0px 8px;
  }

`;

export const S_LocationTagInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  
  cursor: pointer;

  width: 100%;
  gap: 16px;
  padding: 8px 24px 8px 24px;

  background: rgb(36, 37, 39);
  border-radius: 0 0 16px 16px;
  color: white;

  text-align: center;

  @media (max-width: 500px) {
    width: 100%;
    /* padding: 0px 8px; */
  }
`;
