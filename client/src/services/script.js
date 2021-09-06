import api from './api-config';

export const getAllScripts = async () => {
  const resp = await api.get('/scripts');
  return resp.data;
};

export const getOneScript = async id => {
  const resp = await api.get(`/scripts/${id}`);
  return resp.data;
};

export const postScript = async scriptData => {
  const resp = await api.post('/scripts', { script: scriptData });
  return resp.data;
};

export const putScript = async (id, scriptData) => {
  const resp = await api.put(`/scripts/${id}`, { script: scriptData });
  return resp.data;
};

export const deleteScript = async id => {
  const resp = await api.delete(`scripts/${id}`);
  return resp;
};
