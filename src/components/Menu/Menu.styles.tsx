import styled from "styled-components";

import { MenuItemType } from "./MenuItem";
interface MenuItemProps {
  type: MenuItemType;
}

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MenuItemContainer = styled.div<MenuItemProps>`
  display: flex;
  flex-direction: ${(props) => (props.type === "switch" ? "row" : "column")};
  justify-content: ${(props) =>
    props.type === "switch" ? "space-between" : "stretch"};
  padding: 0.5rem 0;
  border-bottom: 0.3px solid ${({ theme }) => theme.border};

  .content-block {
    max-width: 70%;
    white-space: pre-wrap;
  }

  .checkbox-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    .switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 25px;

      input {
        display: none;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        display: flex;
        align-items: center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #db3a34;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50px;

        &:before {
          position: absolute;
          content: "";
          height: 17px;
          width: 17px;
          left: 4px;
          bottom: 4px;
          border-radius: 50%;
          background-color: white;
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }
      }

      input:checked {
        display: block;
      }

      input:checked {
        display: none;
      }

      input:checked + .slider {
        background-color: #52b69a;
      }

      input:focus + .slider {
        box-shadow: 0 0 1px #52b69a;
      }

      input:checked + .slider:before {
        transform: translateX(25px);
      }
    }
  }

  .input-box {
    padding: 0.8rem;
    background-color: #00000057;
    color: #fff;
    border: none;
    border-radius: 5px;

    &:focus {
      outline: none;
    }
  }

  .tags-div {
    background-color: #00000057;
    padding: 0.8rem;
    border-radius: 5px;
    cursor: text;
  }

  .tag-box {
    background-color: transparent;
    border: none;
    color: #fff;

    &:focus {
      outline: none;
    }
  }

  .custom-tag {
    background-color: ${({ theme }) => theme.secondaryColor};
    color: #fff;
    border-color: ${({ theme }) => theme.secondaryColor};
    cursor: pointer;
  }
`;
