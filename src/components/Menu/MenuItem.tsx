/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

import { IResult } from "../../hooks/useDOMEvaluator";
import { MenuItemContainer } from "./Menu.styles";

export enum MenuItemType {
  Switch = "switch",
  Input = "input",
  Tags = "tags",
}

interface MenuProps {
  content: string;
  type: MenuItemType;
  results: IResult;
  setResults: React.Dispatch<React.SetStateAction<IResult>>;
  id: keyof IResult;
}

const MenuItem: React.FC<MenuProps> = ({
  content,
  type,
  id,
  results,
  setResults,
}) => {
  const onChange = useCallback(
    (e: React.ChangeEvent<any>) => {
      setResults({ ...results, [id]: e.target.value });
    },
    [results]
  );

  const onTagsChange = useCallback(
    (tags: string[]) => {
      setResults({ ...results, [id]: tags });
    },
    [results]
  );

  const onSwitchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setResults({ ...results, [id]: e.target.checked });
    },
    [results]
  );

  const renderInputField = useCallback(
    (type: MenuItemType) => {
      if (type === "switch") {
        return (
          <div className="checkbox-container">
            <label className="switch">
              <input
                type="checkbox"
                checked={results[id] as boolean}
                onChange={onSwitchChange}
              />
              <span className="slider"></span>
            </label>
          </div>
        );
      } else if (type === "input") {
        return (
          <input
            type="text"
            className="input-box"
            value={results[id] as string}
            onChange={onChange}
          />
        );
      } else {
        return (
          <TagsInput
            className="tags-div"
            value={results[id] as string[]}
            onChange={onTagsChange}
            inputProps={{
              className: "tag-box",
              placeholder: "Add words",
            }}
            tagProps={{
              className: "react-tagsinput-tag custom-tag",
            }}
          />
        );
      }
    },
    [results]
  );

  return (
    <MenuItemContainer type={type}>
      <p className="content-box">{content}</p>
      {renderInputField(type)}
    </MenuItemContainer>
  );
};

export default MenuItem;
