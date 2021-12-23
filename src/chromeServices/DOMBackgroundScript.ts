import { DOMMessage } from "./types";

const triggerProfanityFilter = async (
  _tabId: number,
  changeInfo: chrome.tabs.TabChangeInfo
) => {
  if (changeInfo.status === "complete") {
    if (chrome.tabs) {
      const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });
      chrome.tabs.sendMessage(
        tabs[0].id || 0,
        { type: "REPLACE_DOM" } as DOMMessage,
        (_response: string) => {}
      );
    }
  }
};

chrome.tabs.onUpdated.addListener(triggerProfanityFilter);
