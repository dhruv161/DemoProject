import axios from 'axios';
import {getSessionData, setSessionData} from 'src/Utils/asyncStorage';

export const LOGIN_KEY = 'LoginToken';

export const postApicall = (url, payload, success, error) => {
  axios
    .post(url, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      if (success) {
        setSessionData(LOGIN_KEY, res?.data?.token);
        success(res?.data);
      }
    })
    .catch(err => {
      error(err);
    });
};

export const postApicallToken = async (url, payload, success, error) => {
  const token = await getSessionData(LOGIN_KEY);
  axios
    .post(url, payload, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      if (success) {
        success(res?.data);
      }
    })
    .catch(err => {
      if (err) {
        error(err);
      }
    });
};

export const getApicall = async (url, success) => {
  const token = await getSessionData(LOGIN_KEY);
  axios
    .get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      if (success) {
        success(res?.data);
      }
    })
    .catch(err => {});
};
