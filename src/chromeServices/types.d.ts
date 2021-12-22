export type DOMMessage = {
  type: "GET_DOM" | "REPLACE_DOM" | "META_DOM";
};

export type DOMMessageResponse = {
  content: {
    text: string;
    class: string;
  }[];
};
