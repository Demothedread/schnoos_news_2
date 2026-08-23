import { getState, updateState } from "../state/store.js";

const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export const enqueueSubmission = (submission) =>
  updateState((state) => ({ ...state, queue: [...state.queue, submission] }));

export const readQueue = () => getState().queue;

export const releaseScheduled = (todayISODate) => {
  const { queue } = getState();
  const ready = queue.filter((item) => ISO_DATE_PATTERN.test(item.publishDate) && item.publishDate <= todayISODate);
  const waiting = queue.filter((item) => !ISO_DATE_PATTERN.test(item.publishDate) || item.publishDate > todayISODate);

  updateState((state) => ({ ...state, queue: waiting }));
  return ready;
};
