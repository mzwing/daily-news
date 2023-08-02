const _getYYYYMMDD = () => {
  let _date = new Date();
  let _currentDate = _date.getDate();
  let _currentMonth = _date.getMonth() + 1;
  let _currentYear = _date.getFullYear();
  String(_currentMonth).length < 2 ? (_currentMonth = `0${_currentMonth}`) : _currentMonth;
  String(_currentDate).length < 2 ? (_currentDate = `0${_currentDate}`) : _currentDate;
  let YYYYMMDD = `${_currentYear}${_currentMonth}${_currentDate}`;
  return YYYYMMDD;
};

const fetchNews = async () => {
  let _res = await fetch("./api/");
  let data = await _res.json();

  // verify the date of news
  Number(data.date) < _getYYYYMMDD() ? (data = await (await fetch("./api/?_vercel_no_cache=1")).json()) : data;

  return data;
};

export const data = fetchNews();
