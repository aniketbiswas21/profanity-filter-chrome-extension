import ProfanityFilter from "../core/ProfanityFilter";
import { DOMMessage, DOMMessageResponse } from "./types";

const profanityFilter = new ProfanityFilter({});

// Applies settings to the profanity filter
const applySettings = ({
  enabled,
  blacklist,
  whitelist,
  placeholder,
}: Partial<{
  enabled: boolean;
  blacklist: string[];
  whitelist: string[];
  placeholder: string;
}>) => {
  enabled !== undefined && profanityFilter.setEnabled(enabled);
  blacklist && profanityFilter.blacklistWords(blacklist);
  whitelist && profanityFilter.whitelistWords(whitelist);
  placeholder && profanityFilter.setPlaceHolderText(placeholder);
};

// Function called when a new message is received
const messagesFromReactAppListener = async (
  msg: DOMMessage,
  _sender: chrome.runtime.MessageSender,
  sendResponse: (
    response: DOMMessageResponse | string | Record<string, any>
  ) => void
) => {
  console.log("[content.js]. Message received", msg);

  if (msg.type === "APPLY_SETTINGS") {
    if (msg.payload) {
      const { blacklist, enabled, placeholder, whitelist } = msg.payload;

      applySettings({
        enabled,
        blacklist,
        whitelist,
        placeholder,
      });

      chrome.storage.local.set({ enabled: enabled });
      chrome.storage.local.set({ blacklist: blacklist });
      chrome.storage.local.set({ whitelist: whitelist });
      chrome.storage.local.set({ placeholder: placeholder });
    }

    // Send the response back to the React app
    sendResponse({
      profanityCount: profanityFilter.totalProfaneWords,
      profanityMap: profanityFilter.getProfanityMap,
      whitelist: profanityFilter.getWhiteListWordList,
      blacklist: profanityFilter.getBlackListWordList,
      profanityList: profanityFilter.getProfanityWordList,
      placeholder: profanityFilter.getPlaceholderText,
      enabled: profanityFilter.isEnabled,
    });
  }

  if (msg.type === "REPLACE_DOM") {
    const [enabled, blacklist, whitelist, placeholder] = await Promise.all([
      chrome.storage.local.get(["enabled"]),
      chrome.storage.local.get(["blacklist"]),
      chrome.storage.local.get(["whitelist"]),
      chrome.storage.local.get(["placeholder"]),
    ]);

    applySettings({
      enabled: enabled.enabled,
      blacklist: blacklist.blacklist,
      whitelist: whitelist.whitelist,
      placeholder: placeholder.placeholder,
    });

    if (!enabled.enabled) {
      sendResponse("disabled");
      return;
    }

    const nodes = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");

    //    @ts-ignore
    const tags: Array<HTMLParagraphElement | HTMLHeadingElement> = [
      ...Array.from(nodes),
    ];

    const tagsLength = tags.length;

    for (let i = 0; i < tagsLength; i++) {
      const tag = tags[i];

      if (tag && tag.innerText) {
        const text = tag.innerText;

        if (text.trim()) {
          const replacedText = profanityFilter.sanitize(text);
          tag.innerText = replacedText;
        }
      }
    }
    sendResponse("done");
  }

  if (msg.type === "META_DOM") {
    const response: Record<string, any> = {
      profanityCount: profanityFilter.totalProfaneWords,
      profanityMap: profanityFilter.getProfanityMap,
      whitelist: profanityFilter.getWhiteListWordList,
      blacklist: profanityFilter.getBlackListWordList,
      profanityList: profanityFilter.getProfanityWordList,
      placeholder: profanityFilter.getPlaceholderText,
      enabled: profanityFilter.isEnabled,
    };

    sendResponse(response);
  }
};

chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
