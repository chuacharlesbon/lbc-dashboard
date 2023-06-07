import axios from 'axios';
import { API } from '../Config';

export const requestForgotPassword = async (body) =>
  axios.post(`${API}/request-forgot-password`, body).then((response) => response);

export const forgotPasswordNew = async (body) =>
  axios.post(`${API}/forgot-password`, body).then((response) => response);
