import { getState } from "../state/store.js";

export const renderQueue = (queueEl) => {
  const { queue } = getState();
  queueEl.innerHTML = "";

  if (!queue.length) {
    queueEl.innerHTML = "<li>No stories in queue.</li>";
    return;
  }

  queue.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = `${entry.publishDate} · ${entry.childNames} (${entry.contributor})`;
    queueEl.append(li);
  });
};

export const renderPublished = (containerEl, articleTemplate) => {
  const { published } = getState();
  containerEl.innerHTML = "";

  if (!published.length) {
    containerEl.innerHTML = "<p>No published articles yet. Start the press run to publish scheduled pieces.</p>";
    return;
  }

  if (!(articleTemplate instanceof HTMLTemplateElement)) {
    console.warn("Published article template is missing or invalid.");
    return;
  }

  published.forEach((article) => {
    const node = articleTemplate.content.cloneNode(true);
    const headlineEl = node.querySelector("h3");
    const bylineEl = node.querySelector(".byline");
    const bodyEl = node.querySelector(".body");

    if (!headlineEl || !bylineEl || !bodyEl) {
      console.warn("Published article template is missing required elements.");
      return;
    }

    headlineEl.textContent = article.headline;
    bylineEl.textContent = article.byline;
    bodyEl.textContent = article.body;
    containerEl.append(node);
  });
};
