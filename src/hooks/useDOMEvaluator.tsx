import { useEffect, useState } from "react";

import { DOMMessage } from "../chromeServices/types";

export interface IResult {
  placeholder: string;
  profanityCount: number;
  blacklist: string[];
  whitelist: string[];
  enabled: boolean;
  profanityMap: Record<string, string>;
}

const useDOMEvaluator = () => {
  const [results, setResults] = useState<IResult>({
    placeholder: "",
    blacklist: [],
    whitelist: [],
    enabled: true,
    profanityCount: 0,
    profanityMap: {},
  });
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
          if (response === "done") {
            fetchProfanityMetaData();
          }
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
        (response: Record<string, any>) => {
          setResults({
            ...results,
            profanityCount: response.profanityCount,
            profanityMap: response.profanityMap,
            whitelist: response.whitelist,
            blacklist: response.blacklist,
            placeholder: response.placeholder,
            enabled: response.enabled,
          });
          console.log(response);
        }
      );
    }
  };

  const applySettings = async () => {
    if (chrome.tabs) {
      const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });
      chrome.tabs.sendMessage(
        tabs[0].id || 0,
        { type: "APPLY_SETTINGS", payload: results } as DOMMessage,
        (response: Record<string, any>) => {
          setResults({
            ...results,
            profanityCount: response.profanityCount,
            profanityMap: response.profanityMap,
            whitelist: response.whitelist,
            blacklist: response.blacklist,
            placeholder: response.placeholder,
            enabled: response.enabled,
          });

          chrome.tabs.reload(tabs[0].id || 0);
          window.close();
        }
      );
    }
  };

  useEffect(() => {
    fetchProfanityMetaData();
  }, []);

  return {
    results,
    setResults,
    sanitize,
    fetchProfanityMetaData,
    applySettings,
  };
};

export default useDOMEvaluator;
