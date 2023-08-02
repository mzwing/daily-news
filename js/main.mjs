import { newsList } from "./news_list.mjs";
import { fetchNewsContent } from "./news_content.mjs";

const injectNewsContent = async () => {
  let _data = await fetchNewsContent();
};

let content = ``;

for(let i = 0; i < newsList.stories.length; i++) {
  content += `
    <p><i class="read_article">${newsList.stories[i].title}</i> <a href="${newsList.stories[i].url}" target="_blank">阅读原文</a> <i><img src="${newsList.stories[i].images[0]}"/>${newsList.stories[i].hint}</i></p>
  `;
};

document.querySelector(".read_article").onclick = injectNewsContent;

document.querySelector('#app').innerHTML = content;
