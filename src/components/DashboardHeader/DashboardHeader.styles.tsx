import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 0.8rem 1rem;
  align-items: center;
  border-bottom: 0.3px solid ${({ theme }) => theme.border};
  width: 100%;

  .logo {
    width: 45px;
    object-fit: contain;
    margin: 0;
  }

  .title {
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0 0 0 0.6rem;

    .strikethrough {
      text-decoration: line-through;
      color: #ee534f;
    }
  }
`;
