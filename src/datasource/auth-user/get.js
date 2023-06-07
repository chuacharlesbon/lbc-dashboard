import axios from 'axios';
import { API } from '../Config';
import { getCookie } from '../../hooks/useCookie';

export const getProfile = async () => {
    const token = getCookie('token');
    return axios
      .get(`${API}/get-profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response);
};