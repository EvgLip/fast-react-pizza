export async function getAddress ({ latitude, longitude })
{
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Не удалось получить адрес");

  const data = await res.json();
  return data;
}
