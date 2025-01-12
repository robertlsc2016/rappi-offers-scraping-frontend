import { Box } from "@mui/material";
import styled from "styled-components";

export const S_LayoutMarketsContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
  padding: 8px;

  /* min-height: 100%; */
  height: fit-content;
  width: 100%;

  @media (min-width: 600px) {
    padding: 8px 32px;

  }
`;
export const S_Header = styled.div`
  position: relative;
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

export const ButtonReturn = styled(Box)`
  height: 100%;
`;

export const BodyHeader = styled(Box)`
  height: 100%;
  display: flex;
  gap: 5px;
  flex-direction: column;
  width: 100%;
`;

export const S_BodyMarket = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 0px;
  gap: 16px;
  border-radius: 16px;
  height: auto;
  flex-wrap: wrap;
  width: 100%;
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
`;

export const SBoxChips = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  width: 100%;
  font-size: 1rem;

  @media (max-width: 400px) {
    * {
      font-size: 10px !important;
    }
  }
`;
