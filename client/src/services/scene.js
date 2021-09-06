import api from './api-config';

export const getAllScenes = async () => {
  const resp = await api.get('/scenes');
  return resp.data;
};

export const getOneScene = async id => {
  const resp = await api.get(`/scenes/${id}`);
  return resp.data;
};

export const postScene = async sceneData => {
  const resp = await api.post('/scenes', { scene: sceneData });
  return resp.data;
};

export const putScene = async (id, sceneData) => {
  const resp = await api.put(`/scenes/${id}`, { scene: sceneData });
  return resp.data;
};

export const deleteScene = async id => {
  const resp = await api.delete(`scenes/${id}`);
  return resp;
};
