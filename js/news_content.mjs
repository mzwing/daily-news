const formatContent = content => {
  let formattedContent = content;
  return formatContent;
}

export const fetchNewsContent = async id => {
  let res = await fetch(`https://news-at.zhihu.com/api/4/news/${id}`);
  let data = await res.json();
  data.body = formatContent(data.body);
  return data;
};
