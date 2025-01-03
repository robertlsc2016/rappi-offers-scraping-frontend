import styled from "styled-components";

export const S_BoxChips = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  /* border: 1px solid black; */
  font-size: 1rem;

  @media (max-width: 400px) {
    * {
      font-size: 10px !important;
    }
  }
`;
