const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

/////////////////////////////////////
export async function getMenu ()
{
  const res = await fetch(`${API_URL}/menu`);

  // fetch не выдает ошибку при 400-х ошибках (например, при неправильном URL), поэтому делаем это вручную. Затем это будет отправлено в блок catch, где будет установлено сообщение
  if (!res.ok) throw Error(`Не удалось загрузить меню.`);

  const { data } = await res.json();
  return data;
}

/////////////////////////////////////
export async function getOrder (id)
{
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Заказ № ${id} не найден (статус ${res.status} ${res.statusText})`);

  const { data } = await res.json();
  return data;
}

/////////////////////////////////////
export async function createOrder (newOrder)
{
  try
  {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error(`статус ${res.status} ${res.statusText}`);
    const { data } = await res.json();
    return data;
  } catch (err)
  {
    throw Error(`Не удалось создать Ваш заказ (${err.message})`);
  }
}

/////////////////////////////////////
export async function updateOrder (id, updateObj)
{
  try
  {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error(`статус ${res.status} ${res.statusText}`);
    // Нам не нужны эти данные, поэтому мы ничего не возвращаем
  } catch (err)
  {
    throw Error(`Не удалось обновить Ваш заказ (${err.message})`);
  }
}
