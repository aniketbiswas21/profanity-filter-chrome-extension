import ProfanityFilter from "../core/ProfanityFilter";
import { DOMMessage, DOMMessageResponse } from "./types";

const profanityFilter = new ProfanityFilter({});

// Function called when a new message is received
const messagesFromReactAppListener = (
  msg: DOMMessage,
  _sender: chrome.runtime.MessageSender,
  sendResponse: (
    response: DOMMessageResponse | string | Record<string, any>
  ) => void
) => {
  console.log("[content.js]. Message received", msg);

  if (msg.type === "GET_DOM") {
    // Retreves all the headlines from the DOM
    const headlines = Array.from(document.getElementsByTagName<"h1">("h1")).map(
      (h1) => {
        return { text: h1.innerText, class: h1.className };
      }
    );

    console.log(headlines, "headlines");

    // Retrieves all the paragraphs from the DOM
    const paragraphs = Array.from(document.getElementsByTagName<"p">("p")).map(
      (p) => {
        return { text: p.innerText, class: p.className };
      }
    );

    console.log(paragraphs, "paragraphs");

    const content = [...headlines, ...paragraphs];

    const response: DOMMessageResponse = {
      content,
    };

    // Send the response back to the React app
    sendResponse(response);
  }

  if (msg.type === "REPLACE_DOM") {
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
      whiteList: profanityFilter.getWhiteWordList,
      profanityList: profanityFilter.getProfanityWordList,
      placeholder: profanityFilter.getPlaceholderText,
    };

    sendResponse(response);
  }
};

chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
