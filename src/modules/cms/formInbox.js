import { getISODateToday } from "../utils/date.js";

const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export const normalizeSubmission = ({ contributor, childNames, notes, publishDate }) => ({
  id: crypto.randomUUID(),
  contributor: contributor.trim(),
  childNames: childNames.trim(),
  notes: notes.trim(),
  publishDate: ISO_DATE_PATTERN.test(publishDate) ? publishDate : getISODateToday(),
  queuedAt: new Date().toISOString()
});
