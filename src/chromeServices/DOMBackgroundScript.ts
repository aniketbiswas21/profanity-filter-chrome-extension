import { DOMMessage, DOMMessageResponse } from "./types";

const triggerProfanityFilter = async (
  tabId: number,
  changeInfo: chrome.tabs.TabChangeInfo
) => {
  console.log("[background.js]. triggerProfanityFilter");
  console.log(changeInfo, "change info");
  if (changeInfo.status === "complete") {
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
  }
};

chrome.tabs.onUpdated.addListener(triggerProfanityFilter);
