import { getTemplateById, getTemplateList } from "../cms/emailTemplates.js";

const COPY_FEEDBACK_DURATION_MS = 900;

const buildMailtoUrl = (subject, body) => `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const updateTemplatePreview = ({ selectEl, bodyEl, emailLinkEl }) => {
  const selected = getTemplateById(selectEl.value);
  bodyEl.value = selected.body;
  emailLinkEl.href = buildMailtoUrl(selected.subject, selected.body);
};

export const setupTemplateTools = ({ selectEl, bodyEl, emailLinkEl, copyButtonEl }) => {
  let copyFeedbackTimeoutId;
  const templates = getTemplateList();
  selectEl.innerHTML = "";

  templates.forEach((template) => {
    const option = document.createElement("option");
    option.value = template.id;
    option.textContent = template.title;
    selectEl.append(option);
  });

  updateTemplatePreview({ selectEl, bodyEl, emailLinkEl });

  selectEl.addEventListener("change", () => {
    updateTemplatePreview({ selectEl, bodyEl, emailLinkEl });
  });

  copyButtonEl.addEventListener("click", async () => {
    clearTimeout(copyFeedbackTimeoutId);

    try {
      await navigator.clipboard.writeText(bodyEl.value);
      copyButtonEl.textContent = "Copied";
      copyFeedbackTimeoutId = setTimeout(() => {
        copyButtonEl.textContent = "Copy Template";
      }, COPY_FEEDBACK_DURATION_MS);
    } catch (error) {
      copyButtonEl.textContent = "Copy Failed";
      copyFeedbackTimeoutId = setTimeout(() => {
        copyButtonEl.textContent = "Copy Template";
      }, COPY_FEEDBACK_DURATION_MS);
      console.warn("Unable to copy template text.", error);
    }
  });
};
