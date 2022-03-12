import axios from 'axios';
import {BaseURL} from './ApiEnviroment';

export async function HandleSignUpPostRequest (data) {
  let data1 = null;
  await axios
    .post (`${BaseURL}/api/Auth/SignUp`, data)
    .then (function (response) {
      data1 = response.status;
    })
    .catch (error => {
      data1 = error.response.data.detail;
    });
  return data1;
}

export async function HandleSignInPostRequest (data) {
  let data1 = null;
  await axios
    .post (`${BaseURL}/api/Auth/SignIn`, data)
    .then (function (response) {
      localStorage.setItem ('Users', JSON.stringify (response.data));
      data1 = response.status;
    })
    .catch (error => {
      data1 = error.response.data;
    });
  return data1;
}
