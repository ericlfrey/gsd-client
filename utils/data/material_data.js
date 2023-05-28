import { clientCredentials } from '../client';

const getUserMaterials = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/materials`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});
const getAllMaterials = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/materials`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleMaterial = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/materials/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const createMaterial = (materialObj, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/materials`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
    body: JSON.stringify(materialObj),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateMaterial = (materialObj) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/materials/${materialObj.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(materialObj),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteMaterial = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/materials/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve((data)))
    .catch(reject);
});

export {
  getUserMaterials, getAllMaterials, getSingleMaterial, createMaterial, updateMaterial, deleteMaterial,
};
