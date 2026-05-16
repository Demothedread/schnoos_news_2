import { normalizeSubmission } from "../cms/formInbox.js";
import { enqueueSubmission, releaseScheduled } from "../cms/articleQueue.js";
import { publishReadySubmissions } from "../publish/publisher.js";
import { renderPublished, renderQueue } from "./render.js";

export const bindUiEvents = ({ formEl, queueEl, publishEl, publishedContainerEl, articleTemplateEl }) => {
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(formEl);
    const submission = normalizeSubmission({
      contributor: formData.get("contributor") || formEl.querySelector("#contributor").value,
      children: formData.get("children") || formEl.querySelector("#children").value,
      notes: formData.get("notes") || formEl.querySelector("#notes").value,
      publishDate: formData.get("publishDate") || formEl.querySelector("#publish-date").value
    });

    enqueueSubmission(submission);
    renderQueue(queueEl);
    formEl.reset();
  });

  publishEl.addEventListener("click", () => {
    const today = new Date().toISOString().slice(0, 10);
    const ready = releaseScheduled(today);
    publishReadySubmissions(ready);

    renderQueue(queueEl);
    renderPublished(publishedContainerEl, articleTemplateEl);
  });
};
