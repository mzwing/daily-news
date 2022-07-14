import { data } from "./fetch_news.mjs";

let content = ``;

for(let i = 0; i < data.stories.length; i++) {
  content += `
    <p><a href="${data.stories[i].url}" target="_blank">${data.stories[i].title}</a> <i><img src="${data.stories[i].images[0]}"/>${data.stories[i].hint}</i></p>
  `;
};

document.querySelector('#app').innerHTML = content;
