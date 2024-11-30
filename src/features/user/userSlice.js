import { getAddress } from '../../services/apiGeocoding';

function getPosition ()
{
  return new Promise(function (resolve, reject)
  {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchAddress ()
{
  // 1) получаем геолокационное местоположение пользователя
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Затем используем API обратного геокодирования, чтобы получить описание адреса пользователя и отобразить его в форме заказа, чтобы пользователь мог исправить его в случае ошибки
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Затем возвращаем объект с интересующими нас данными
  return { position, address };
}
