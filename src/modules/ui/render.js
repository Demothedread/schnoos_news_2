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
    li.textContent = `${entry.publishDate} · ${entry.children} (${entry.contributor})`;
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

  published.forEach((article) => {
    const node = articleTemplate.content.cloneNode(true);
    node.querySelector("h3").textContent = article.headline;
    node.querySelector(".byline").textContent = article.byline;
    node.querySelector(".body").textContent = article.body;
    containerEl.append(node);
  });
};
