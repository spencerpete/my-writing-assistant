import api from './api-config';

export const getAllAc = async () => {
  const resp = await api.get('/acts');
  return resp.data;
};

export const getOneAct = async id => {
  const resp = await api.get(`/acts/${id}`);
  return resp.data;
};

export const postAct = async actData => {
  const resp = await api.post('/acts', { act: actData });
  return resp.data;
};

export const putAct = async (id, actData) => {
  const resp = await api.put(`/acts/${id}`, { act: actData });
  return resp.data;
};

export const deleteAct = async id => {
  const resp = await api.delete(`acts/${id}`);
  return resp;
};
