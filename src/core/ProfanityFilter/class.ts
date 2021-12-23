import badWords from "../data/badWords";

class ProfanityFilter {
  private profanityList: string[];
  private whiteList: string[];
  private blackList: string[];
  private regex: RegExp;
  private splitRegex: RegExp;
  private placeholder: string;
  private replaceRegex: RegExp;
  private profanityMap: Map<string, number>;
  private count: number;
  private enabled: boolean = true;

  constructor({
    profanityList = [...Array.from(new Set(badWords))],
    whiteList = [],
    blackList = [],
    placeholder = "*",
  }: {
    profanityList?: string[];
    whiteList?: string[];
    blackList?: string[];
    placeholder?: string;
  }) {
    this.profanityList = profanityList.concat(blackList);
    this.blackList = blackList;
    this.whiteList = whiteList;
    this.placeholder = placeholder;
    this.regex = /[^a-zA-Z0-9|\$|\@]|\^/g;
    this.splitRegex = /\b/;
    this.replaceRegex = /\w/g;
    this.profanityMap = new Map();
    this.count = 0;
  }

  get getProfanityWordList(): string[] {
    return this.profanityList;
  }

  get getWhiteListWordList(): string[] {
    return this.whiteList;
  }

  get getBlackListWordList(): string[] {
    return this.blackList;
  }

  /**
   * Returns the current placeholder text
   */
  get getPlaceholderText(): string {
    return this.placeholder;
  }

  /**
   * Returns a map of profane words found in the text with their occurences
   */
  get getProfanityMap(): Record<string, number> {
    const profanityMap: Record<string, number> = {};

    Array.from(this.profanityMap.keys()).forEach((key) => {
      profanityMap[key] = this.profanityMap.get(key)!;
    });

    return profanityMap;
  }

  /**
   * Returns the number of profane words found in the text
   */
  get totalProfaneWords(): number {
    return this.count;
  }

  get isEnabled(): boolean {
    return this.enabled;
  }

  /**
   * Configures if to use the profanity filter
   */
  setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  /**
   * Allows you to set a custom placeholder text to use sanitize words
   */
  setPlaceHolderText(string: string) {
    this.placeholder = string;
  }

  /**
   * Checks if a text is profane or not
   * @param text Text to check for profanity
   * @returns {boolean} True if profane, false if not
   */
  isProfane(text: string): boolean {
    const count = this.profanityList.filter((word) => {
      const wordExp = new RegExp(
        `\\b${word.replace(/(\W)/g, "\\$1")}\\b`,
        "gi"
      );
      return !this.whiteList.includes(word) && wordExp.test(text);
    }).length;

    if (count > 0) {
      const previousValue = this.profanityMap.get(text) || 0;
      this.profanityMap.set(text, previousValue + count);
    }

    return count > 0;
  }

  /**
   * Replaces the given profane word with the placeholder text
   * @param string String to replace
   * @returns {string} Replaced string
   */
  replaceWord(string: string) {
    return string
      .replace(this.regex, "")
      .replace(this.replaceRegex, this.placeholder);
  }

  /**
   * Checks and replaces profane words in a string
   * @param string String to sanitize
   * @returns {string} Sanitized string
   */
  sanitize(string: string) {
    // Return the same string if the filter is disabled
    if (!this.isEnabled) {
      return string;
    }

    return string
      .split(this.splitRegex)
      .map((word) => {
        if (this.isProfane(word)) {
          this.count++;
          return this.replaceWord(word);
        }
        return word;
      })
      .join((this.splitRegex.exec(string) as string[])[0]);
  }

  /**
   * Adds a word to the profanity list
   * @param words Words to add to blacklist
   */
  blacklistWords(words: string[]) {
    words.forEach((word) => {
      if (this.whiteList.includes(word)) {
        this.whiteList.splice(this.whiteList.indexOf(word), 1);
      }

      if (!this.profanityList.includes(word)) {
        this.blackList.push(word);
        this.profanityList.push(word);
      }
    });
  }

  /**
   * Adds a word to the whitelist, ignoring from profanity checks
   * @param words Words to add to whitelist
   */
  whitelistWords(words: string[]) {
    words.forEach((word) => {
      if (this.profanityList.includes(word)) {
        this.profanityList.splice(this.profanityList.indexOf(word), 1);
      }
      if (!this.whiteList.includes(word)) {
        this.whiteList.push(word);
      }
    });
  }
}

export default ProfanityFilter;
