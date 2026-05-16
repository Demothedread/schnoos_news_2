const STORAGE_KEY = "schnoos-news-state";

const defaultState = {
  queue: [],
  published: []
};

const readState = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return structuredClone(defaultState);
  }

  try {
    return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    return structuredClone(defaultState);
  }
};

let state = readState();

const persist = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const getState = () => state;

export const updateState = (updater) => {
  state = updater(state);
  persist();
  return state;
};
