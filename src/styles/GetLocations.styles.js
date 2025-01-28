import styled from "styled-components";

export const S_GetLocation = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Arial, sans-serif;
  gap: 16px;

  /* bottom: 1px solid black; */

  width: 100vw;
  height: 100%;

  overflow: hidden;
  /* border: 1px solid; */

  /* background-color: green; */

  touch-action: none !important;
`;

export const S_ContainerGetLocation = styled.div`
  /* position: fixed; */
  /* top: 20px; */
  /* opacity: 10% !important; */
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: white;
  flex-direction: column;
  
  /* padding: 20px; */
  font-family: Arial, sans-serif;
  /* margin-top: 8px; */
  max-width: 500px;
  height: 95%;
  width: 90%;

  border-radius: 0px 0px 32px 32px;
  /* border: 1px solid; */
  gap: 16px;

  overflow: hidden;

  /* background-color: red; */

  /* overflow: hidden; */
  /* padding-bottom: 16px; */
  /* background-color: red; */
  /* border: 1px solid; */
`;

export const S_BoxAddress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 9px;
  height: 54px;
  border: 1px solid rgb(214, 208, 208);
  background-color: rgb(255, 255, 255);

  cursor: pointer;
  border-radius: 8px;
  color: rgb(76, 74, 74);

  /* opacity: 0; // Começa invisível */
  /* transform: translateY(-20px); // Começa um pouco acima */
  /* margin-bottom: 8px; */

  &:hover {
    background-color: rgb(200, 200, 200);
  }
`;
