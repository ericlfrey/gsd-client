import { clientCredentials } from '../client';

const getUserProjects = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/projects`, {
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
const getAllProjects = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/projects`, {
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

const getSingleProject = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/projects/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const createProject = (project) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${project.uid}`,
    },
    body: JSON.stringify(project),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateProject = (project) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/projects/${project.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(project),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteProject = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/projects/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve((data)))
    .catch(reject);
});

export {
  getUserProjects, getAllProjects, getSingleProject, createProject, updateProject, deleteProject,
};
