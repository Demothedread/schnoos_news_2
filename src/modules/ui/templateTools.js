import { getTemplateById, getTemplateList } from "../cms/emailTemplates.js";

const updateTemplatePreview = ({ selectEl, bodyEl, emailLinkEl }) => {
  const selected = getTemplateById(selectEl.value);
  bodyEl.value = selected.body;
  emailLinkEl.href = `mailto:?subject=${encodeURIComponent(selected.subject)}&body=${encodeURIComponent(selected.body)}`;
};

export const setupTemplateTools = ({ selectEl, bodyEl, emailLinkEl, copyButtonEl }) => {
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
    try {
      await navigator.clipboard.writeText(bodyEl.value);
      copyButtonEl.textContent = "Copied";
      setTimeout(() => {
        copyButtonEl.textContent = "Copy Template";
      }, 900);
    } catch (error) {
      console.warn("Unable to copy template text.", error);
    }
  });
};
