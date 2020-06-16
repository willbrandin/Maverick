/**
 * Formats UTC Date to mm/dd/yyyy
 * @param {*Date Date in UTC format} date
 */
const formatDate = (date) => {
  const metricDate = new Date(date);
  const month = metricDate.getMonth() + 1; // JS Months indexed 0
  const day = metricDate.getDate();
  const year = metricDate.getFullYear();
  return month + "/" + day + "/" + year;
};

export default formatDate;
