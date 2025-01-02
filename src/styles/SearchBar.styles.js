import styled from "styled-components";

export const S_SearchBarBox = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
  width: ${(props) => props.widthSearchArea};
  height: 70%;
  border-radius: 5000px;
  padding: 0 32px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;
