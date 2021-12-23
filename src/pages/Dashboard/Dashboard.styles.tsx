import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;

  .dashboard-title {
    margin: 0;
    font-size: 1.2rem;
  }

  .progress-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .progress-indicator {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100px;
  }

  .indicator-subheading {
    font-size: 1rem;
    font-weight: bold;
  }

  .report-text {
    font-size: 0.8rem;
    text-decoration: underline;
    cursor: pointer;
    margin: 0;
  }

  .empty-map {
    text-align: center;
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  .action-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem 0;

    button {
      background-color: ${({ theme }) => theme.secondaryColor};
      border: none;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      color: ${({ theme }) => theme.text};
      cursor: pointer;
    }
  }
`;
