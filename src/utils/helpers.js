export function formatCurrency (value)
{
  return new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
  }).format(value * 60);
}

export function formatDate (dateStr)
{
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft (dateStr)
{
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000); //1000 ms * 60 sec/минуте => ms в одной минуте
}
