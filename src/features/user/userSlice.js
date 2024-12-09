import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getAddress } from '../../services/apiGeocoding';

const initialState = {
  userName: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
};

export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  async function ()
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
    //это payload для FULFILLED State
    return { position, address };
  }
);

const userSlice = createSlice(
  {
    name: 'user',
    initialState,
    reducers: {
      updateName (state, action)
      {
        state.userName = action.payload;
      }
    },
    extraReducers: (builder) =>
      builder
        .addCase(
          fetchAddress.pending,
          (state) =>
          {
            state.status = 'loading';
            state.error = '';
          }
        )
        .addCase(
          fetchAddress.fulfilled,
          (state, action) => 
          {
            state.status = 'idle';
            state.position = action.payload.position;
            state.address = action.payload.address;

          }
        )
        .addCase(
          fetchAddress.rejected,
          (state, action) =>
          {
            state.status = 'error';
            state.error = action.error.message;
          }
        )
  }
);

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
// export { fetchAddress };

//SELECTORS
export const getUserName = (state) => state.user.userName;
export const getUser = (state) => state.user;

//Функции для получение адреса пользователя
function getPosition ()
{
  return new Promise(function (resolve, reject)
  {
    navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true });
  });
}

