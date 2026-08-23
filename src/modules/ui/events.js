import { normalizeSubmission } from "../cms/formInbox.js";
import { enqueueSubmission, releaseScheduled } from "../cms/articleQueue.js";
import { publishReadySubmissions } from "../publish/publisher.js";
import { getISODateToday } from "../utils/date.js";
import { saveComingUpThisMonth } from "./monthlyPlanner.js";
import { renderPublished, renderQueue } from "./render.js";

export const bindUiEvents = ({ formEl, queueEl, publishEl, publishedContainerEl, articleTemplateEl, comingUpTextEl, saveComingUpEl }) => {
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(formEl);
    const submission = normalizeSubmission({
      contributor: String(formData.get("contributor")),
      childNames: String(formData.get("childNames")),
      notes: String(formData.get("notes")),
      publishDate: String(formData.get("publishDate"))
    });

    enqueueSubmission(submission);
    renderQueue(queueEl);
    formEl.reset();
  });

  publishEl.addEventListener("click", () => {
    const today = getISODateToday();
    const ready = releaseScheduled(today);
    publishReadySubmissions(ready);

    renderQueue(queueEl);
    renderPublished(publishedContainerEl, articleTemplateEl);
  });

  saveComingUpEl.addEventListener("click", () => {
    saveComingUpThisMonth(comingUpTextEl.value);
  });
};
