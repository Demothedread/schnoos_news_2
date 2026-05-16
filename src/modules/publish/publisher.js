import { updateState } from "../state/store.js";
import { generateArticle } from "../ai/articleGenerator.js";

export const publishReadySubmissions = (submissions) => {
  if (!submissions.length) {
    return [];
  }

  const generated = submissions.map(generateArticle);
  updateState((state) => ({ ...state, published: [...generated, ...state.published] }));
  return generated;
};
