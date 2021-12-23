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
