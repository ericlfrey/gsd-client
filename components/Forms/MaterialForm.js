import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import formStyles from '../../styles/FormStyles.module.css';
import GoBackBtn from '../GoBackBtn/GoBackBtn';
import { createMaterial, updateMaterial } from '../../utils/data/material_data';
import { getSingleProject } from '../../utils/data/project_data';

const initialState = {
  name: '',
  price: 0,
  quantity: 0,
  acquired: false,
};

export default function MaterialForm({ projectId, materialObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [project, setProject] = useState({});

  const router = useRouter();

  useEffect(() => {
    if (projectId) getSingleProject(projectId).then(setProject);
    if (materialObj.id) {
      setFormInput((prevState) => ({
        ...prevState,
        id: materialObj.id,
        name: materialObj.name,
        price: materialObj.price,
        quantity: materialObj.quantity,
        acquired: materialObj.acquired,
        project: materialObj.project,
        task: materialObj.task?.id,
      }));
    }
  }, [materialObj, projectId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (materialObj.id) {
      const updatedMaterial = {
        ...formInput,
        price: Number(formInput.price),
        quantity: Number(formInput.quantity),
        project: formInput.project.id,
        task: Number(formInput.task),
      };
      updateMaterial(updatedMaterial).then(router.push(`/project/${projectId}`));
    } else {
      const newMaterial = {
        ...formInput,
        project: projectId,
        price: Number(formInput.price),
        quantity: Number(formInput.quantity),
      };
      createMaterial(newMaterial).then(router.push(`/project/${projectId}`));
    }
  };

  return (
    <>
      <div className={formStyles.formContainer}>
        <Form onSubmit={handleSubmit} className={formStyles.form}>
          <Form.Group className="mb-3">
            <Form.Label>Material Name</Form.Label>
            <Form.Control
              className={formStyles.formInputField}
              type="text"
              name="name"
              value={formInput.name}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              className={formStyles.formInputField}
              type="number"
              min=".01"
              step=".01"
              name="price"
              value={formInput.price}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              className={formStyles.formInputField}
              type="number"
              name="quantity"
              min="1"
              step="1"
              value={formInput.quantity}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </Form.Group>
          {project?.tasks?.length
            ? (
              <Form.Group className="mb-3">
                <Form.Label>Assign to Task</Form.Label>
                <Form.Select
                  className={formStyles.formInputField}
                  name="task"
                  onChange={handleChange}
                  value={formInput.task}
                  required
                >
                  <option value="">Choose</option>
                  {
                    project?.tasks?.map((task) => (
                      <option
                        key={task.id}
                        value={task.id}
                      >
                        {task.name}
                      </option>
                    ))
                  }
                </Form.Select>
              </Form.Group>
            )
            : ''}
          {materialObj.id
            ? (
              <Form.Group className="mb-3">
                <Form.Label>Acquired?</Form.Label>
                <Form.Check
                  type="switch"
                  name="acquired"
                  checked={formInput.acquired}
                  onChange={(e) => {
                    setFormInput((prevState) => ({
                      ...prevState,
                      acquired: e.target.checked,
                    }));
                  }}
                />
              </Form.Group>
            )
            : ''}
          <div>
            <button type="submit" className={formStyles.formBtn}>
              {materialObj.id ? 'Edit Material' : 'Add Material'}
            </button>
          </div>
        </Form>
      </div>
      <GoBackBtn />
    </>
  );
}

MaterialForm.propTypes = {
  projectId: PropTypes.number,
  materialObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    acquired: PropTypes.bool,
    project: PropTypes.shape({
      id: PropTypes.number,
    }),
    task: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};

MaterialForm.defaultProps = {
  projectId: 0,
  materialObj: initialState,
};
