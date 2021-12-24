import styled from "styled-components";

export const ReportItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 0.3px solid ${({ theme }) => theme.border};

  .display-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
`;
