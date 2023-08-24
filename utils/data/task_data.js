import { clientCredentials } from '../client';

const getUserTasks = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/tasks`, {
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
const getAllTasks = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/tasks`, {
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

const getSingleTask = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/tasks/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const createTask = (taskObj) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskObj),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateTask = (taskObj) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/tasks/${taskObj.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskObj),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteTask = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/tasks/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve((data)))
    .catch(reject);
});

export {
  getUserTasks, getAllTasks, getSingleTask, createTask, updateTask, deleteTask,
};
