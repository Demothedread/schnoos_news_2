export const normalizeSubmission = ({ contributor, children, notes, publishDate }) => ({
  id: crypto.randomUUID(),
  contributor: contributor.trim(),
  children: children.trim(),
  notes: notes.trim(),
  publishDate,
  queuedAt: new Date().toISOString()
});
