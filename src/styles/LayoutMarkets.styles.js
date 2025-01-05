import styled from "styled-components";

export const S_LayoutMarketsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  height: 100%;
  width: 100%;
`;
export const S_Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  padding: 12px;
  width: 100%;
  height: auto;
  background-color: #e9e9e9;
  border-radius: 16px;
`;

export const S_BodyMarket = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 0px;
  gap: 16px;
  border-radius: 16px;
  /* border: 1px solid black; */
  height: auto;
  flex-wrap: wrap;
  width: 100%;
  /* height: 100%; */ /* Comentado conforme seu código */
`;

export const S_BodyMarketSearching = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  background-color: white;

  width: 100%;
  height: auto;
  gap: 10px;
  padding: 8px;

  /* border: 1px solid black; */
`;

export const S_BodyMarketInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
  height: 100%;
  /* border: 1px solid black; */
`;

export const SBoxChips = styled.div`
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

// .Grid {
//   border: 1px solid #d9dddd;
// }

// .GridItem {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #f8f8f0;
// }
