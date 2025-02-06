import styled from "styled-components";

export const S_ContainerSearchBar = styled.div`
  position: fixed;
  bottom: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: auto;
  gap: 8px;
  z-index: 100;

  /* border: 1px solid black; */
  /* padding-bottom: env(safe-area-inset-bottom); */
  
  transition: transform 0.4s ease-in-out, opacity 0.3s ease-in-out;

  transform: ${(props) => props.$ishidden == "true" ? (props.$from == "home" ? "translateY(120px)" : "translateY(70px)") : "translateY(0)"};

  /* opacity: ${(props) => (props.$ishidden == "disable" ? "0" : "1")}; */
  /* transform: ${({ ishidden }) =>
    ishidden == "disable" ? "translateY(160px)" : "translateY(0)"};
  opacity: ${({ ishidden }) => (ishidden == "disable" ? "0" : "1")}; */
  @media (max-width: 500px) {
    padding: 0px 8px;
    padding-bottom: env(safe-area-inset-bottom);
  }

  @media (min-width: 500px) and (max-width: 1200px) {
    padding: 0px 10%;
    padding-bottom: env(safe-area-inset-bottom);
  }
`;

export const S_SearchbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 1200px;

  flex-direction: column;

  gap: 8px;
  width: 100%;

  min-height: 64px;

  background: white;
  transition: width 0.5s ease, height 0.5ms ease;

  border-radius: 16px;

  box-shadow: ${(props) =>
    props.$ishidden == "disable"
      ? "none"
      : "rgba(0, 0, 0, 0.56) 0px 0px 64px 0px"};

  /* box-shadow: rgba(0, 0, 0, 0.56) 0px 4px 50px 5px; */

  padding: 8px 24px 8px 24px;
`;

export const S_SearchBarBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  height: 100%;
  width: 100%;

  max-width: 450px;

  input {
    font-size: 16px;
    padding: 16px 0px;
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

export const S_ContainerChips = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  column-gap: 16px;

  width: 100%;
  padding-bottom: 6px;
  /* row-gap: 8px; */
  width: 100%;
  height: auto;
  /* height: 50px; */

  overflow-x: auto; /* Habilita scroll horizontal */
  white-space: nowrap; /* Garante que o conteúdo não quebre linhas */

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

  @media (min-width: 1200px) {
    justify-content: center;
  }

  /* Para navegadores que suportam scrollbar-color */
  scrollbar-color: #888 #f1f1f1; /* thumb | track */
  scrollbar-width: thin; /* Para navegadores Firefox */
`;
