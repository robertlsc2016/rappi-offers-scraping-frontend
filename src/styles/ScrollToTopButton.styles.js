import styled from "styled-components";

export const S_ScrollToTopButton = styled.div`
  cursor: pointer;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-size: 24px;
  width: 48px;
  height: 48px;
  color: white;
  background: ${({ theme }) => theme.colors.default_black};;
  /* box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px; */
`;
