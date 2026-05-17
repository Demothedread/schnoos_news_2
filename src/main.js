import { bindUiEvents } from "./modules/ui/events.js";
import { renderComingUpThisMonth } from "./modules/ui/monthlyPlanner.js";
import { renderPublished, renderQueue } from "./modules/ui/render.js";
import { setupTemplateTools } from "./modules/ui/templateTools.js";

const formEl = document.getElementById("submission-form");
const queueEl = document.getElementById("queue-list");
const publishEl = document.getElementById("start-publishing");
const publishedContainerEl = document.getElementById("published-articles");
const articleTemplateEl = document.getElementById("article-template");
const templateSelectEl = document.getElementById("email-template-select");
const templateBodyEl = document.getElementById("email-template-body");
const emailTemplateLinkEl = document.getElementById("email-template-link");
const copyTemplateButtonEl = document.getElementById("copy-template");
const comingUpTextEl = document.getElementById("coming-up-text");
const saveComingUpEl = document.getElementById("save-coming-up");

renderQueue(queueEl);
renderPublished(publishedContainerEl, articleTemplateEl);
renderComingUpThisMonth(comingUpTextEl);
setupTemplateTools({
  selectEl: templateSelectEl,
  bodyEl: templateBodyEl,
  emailLinkEl: emailTemplateLinkEl,
  copyButtonEl: copyTemplateButtonEl
});

bindUiEvents({
  formEl,
  queueEl,
  publishEl,
  publishedContainerEl,
  articleTemplateEl,
  comingUpTextEl,
  saveComingUpEl
});
