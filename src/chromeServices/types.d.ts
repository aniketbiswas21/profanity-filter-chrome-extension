import { IResult } from "../hooks/useDOMEvaluator";

export type DOMMessage = {
  type: "APPLY_SETTINGS" | "REPLACE_DOM" | "META_DOM";
  payload?: IResult;
};

export type DOMMessageResponse = {
  content: {
    text: string;
    class: string;
  }[];
};
