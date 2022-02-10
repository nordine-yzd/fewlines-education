import { sentenceJoiner } from "./sentenceJoiner";
import { sentenceSplitter } from "./sentenceSplitter";

export const context = (sentence: string): string => {
  // Code your function for context here
  const newSentence = sentenceSplitter(sentence);

  const result = newSentence.filter(
    (word) =>
      word.charAt(0).indexOf("a") &&
      word.charAt(0).indexOf("e") &&
      word.charAt(0).indexOf("i") &&
      word.charAt(0).indexOf("o") &&
      word.charAt(0).indexOf("u") &&
      word.charAt(0).indexOf("A") &&
      word.charAt(0).indexOf("E") &&
      word.charAt(0).indexOf("I") &&
      word.charAt(0).indexOf("O") &&
      word.charAt(0).indexOf("U"),
  );

  return sentenceJoiner(result);
};
