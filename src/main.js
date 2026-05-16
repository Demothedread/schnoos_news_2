import { bindUiEvents } from "./modules/ui/events.js";
import { renderPublished, renderQueue } from "./modules/ui/render.js";

const formEl = document.getElementById("submission-form");
const queueEl = document.getElementById("queue-list");
const publishEl = document.getElementById("start-publishing");
const publishedContainerEl = document.getElementById("published-articles");
const articleTemplateEl = document.getElementById("article-template");

renderQueue(queueEl);
renderPublished(publishedContainerEl, articleTemplateEl);

bindUiEvents({ formEl, queueEl, publishEl, publishedContainerEl, articleTemplateEl });
