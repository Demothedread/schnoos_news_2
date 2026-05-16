import { getState, updateState } from "../state/store.js";

export const enqueueSubmission = (submission) =>
  updateState((state) => ({ ...state, queue: [...state.queue, submission] }));

export const readQueue = () => getState().queue;

export const releaseScheduled = (todayISODate) => {
  const { queue } = getState();
  const ready = queue.filter((item) => item.publishDate <= todayISODate);
  const waiting = queue.filter((item) => item.publishDate > todayISODate);

  updateState((state) => ({ ...state, queue: waiting }));
  return ready;
};
