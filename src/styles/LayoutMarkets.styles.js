import { Box } from "@mui/material";
import styled from "styled-components";

export const S_LayoutMarketsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;
  margin-top: 32px;

  /* min-height: 100%; */
  height: fit-content;

  width: 100%;
  max-width: 1200px;

  /* border: 1px solid; */

  /* padding: 16px 10%; */

  @media (max-width: 500px) {
    padding: 16px 8px;
  }

  /* min-height: 100vh; */
`;

export const S_Header = styled.div`
  /* position: relative; */
  /* border: 1px solid; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

  gap: 16px;
  padding: 12px;
  height: auto;
  background-color: #e9e9e9;
  min-height: 120px;
  height: auto;
  border-radius: ${({ theme }) => theme.border_radius.medium};
`;

export const ButtonReturn = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid; */

  height: 100%;
`;

export const BodyHeader = styled(Box)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  /* margin-top: 32px; */

  gap: 5px;
  width: 100%;
`;

export const S_BodyMarket = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  /* margin-top: 32px; */
  gap: 16px;
  border-radius: ${({ theme }) => theme.border_radius.medium};
  height: auto;
  flex-wrap: wrap;
  width: 100%;
`;

export const S_BodyMarketSearching = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
  height: auto;
  gap: 10px;
  padding: 8px;

  border: 1px solid black;
`;

export const S_BodyMarketInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 4px;
  height: 100%;
`;

export const SBoxChips = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  /* border: 1px solid; */
  width: 80%;
  gap: 5px;
  font-size: 1rem;

  @media (max-width: 400px) {
    * {
      font-size: 10px !important;
    }
  }
`;
