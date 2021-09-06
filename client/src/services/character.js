import api from './api-config';

export const getAllCharacters = async () => {
  const resp = await api.get('/characters');
  return resp.data;
};

export const getOneCharacter = async id => {
  const resp = await api.get(`/characters/${id}`);
  return resp.data;
};

export const postCharacter = async characterData => {
  const resp = await api.post('/characters', { character: characterData });
  return resp.data;
};

export const putCharacter = async (id, characterData) => {
  const resp = await api.put(`/characters/${id}`, { character: characterData });
  return resp.data;
};

export const deleteCharacter = async id => {
  const resp = await api.delete(`characters/${id}`);
  return resp;
};
