import { fetchNews } from "./fetch_news.mjs";

async function renderNews() {
  const data = await fetchNews();
  const content = data.stories.map(story => `
    <p><a href="${story.url}" target="_blank">${story.title}</a> <i><img src="${story.images[0]}"/>${story.hint}</i></p>
  `).join('');

  document.querySelector('#app').innerHTML = content;
}

renderNews();
