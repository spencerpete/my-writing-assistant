import axios from 'axios'
const apiKey = process.env.REACT_APP_AIRTABLE_KEY
const scriptURL = 'https://api.airtable.com/v0/appuQ5hJJf632Yz2G/Script'
const characterURL = 'https://api.airtable.com/v0/appuQ5hJJf632Yz2G/Character'
const config = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  }
}

//Scenes API calls
export const getScenes = async() => {
  try {
    const res = await axios.get(scriptURL, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export const getScene = async (id) => {
  try {
    const res = await axios.get(`${scriptURL}/${id}`, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const createScene = async (form) => {
  try {
    const res = await axios.post(scriptURL, { fields: form }, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const editScene = async (id, form) => {
  try {
    const res = await axios.put(`${scriptURL}/${id}`, { fields: form }, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteScene = async (id) => {
  try {
    const res = await axios.delete(`${scriptURL}/${id}`, config)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

// Character API calls 

export const getCharacters = async() => {
  try {
    const res = await axios.get(characterURL, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export const getCharacter = async (id) => {
  try {
    const res = await axios.get(`${characterURL}/${id}`, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const createCharacter = async (form) => {
  try {
    const res = await axios.post(characterURL, { fields: form }, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const editCharacter = async (id, form) => {
  try {
    const res = await axios.put(`${characterURL}/${id}`, { fields: form }, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCharacter = async (id) => {
  try {
    const res = await axios.delete(`${characterURL}/${id}`, config)
    return res.data
  } catch (error) {
    console.log(error)
  }
}