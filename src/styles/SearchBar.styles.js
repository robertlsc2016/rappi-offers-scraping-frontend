import styled from "styled-components";

export const S_SearchBarBox = styled.div`
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
  width: ${(props) => props.widthSearchArea};
  height: 70%;
  border-radius: 5000px;
  padding: 0 32px;

  input {
    font-size: 24px;
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

  @media (max-width: 700px) {
    width: 100%;
  }
`;
