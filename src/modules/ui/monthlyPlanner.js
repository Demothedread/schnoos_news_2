import { getState, updateState } from "../state/store.js";

export const renderComingUpThisMonth = (textareaEl) => {
  textareaEl.value = getState().comingUpThisMonth;
};

export const saveComingUpThisMonth = (text) => {
  updateState((state) => ({ ...state, comingUpThisMonth: text.trim() }));
};
