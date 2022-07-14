export default async (req, res) => {
  let response = await fetch("https://news-at.zhihu.com/api/4/news/latest");
  let data = await response.json();
  res.setHeader("Cache-Control", "max-age=0", "s-max-age=86400", "stale-while-revalidate");
  res.status(200).json(data);
};
