import { useEffect } from "react";

import { DOMMessage } from "../chromeServices/types";

const useDOMEvaluator = () => {
  const sanitize = async () => {
    if (chrome.tabs) {
      const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });
      chrome.tabs.sendMessage(
        tabs[0].id || 0,
        { type: "REPLACE_DOM" } as DOMMessage,
        (response: string) => {
          console.log(response);
        }
      );
    }
  };

  const fetchProfanityMetaData = async () => {
    if (chrome.tabs) {
      const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });

      chrome.tabs.sendMessage(
        tabs[0].id || 0,
        { type: "META_DOM" } as DOMMessage,
        (response: string) => {
          console.log(response);
        }
      );
    }
  };

  useEffect(() => {
    fetchProfanityMetaData();
  }, []);

  return [sanitize, fetchProfanityMetaData];
};

export default useDOMEvaluator;
