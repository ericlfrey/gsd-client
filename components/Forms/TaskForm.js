import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import formStyles from '../../styles/FormStyles.module.css';
import GoBackBtn from '../GoBackBtn/GoBackBtn';
import { createTask, updateTask } from '../../utils/data/task_data';

const initialState = {
  id: '',
  project: '',
  name: '',
  details: '',
  date_created: '',
  due_date: '',
  status: 'Not Started',
};

export default function TaskForm({ projectId, taskObj }) {
  const [formInput, setFormInput] = useState(initialState);

  const router = useRouter();

  useEffect(() => {
    if (taskObj.id) setFormInput(taskObj);
  }, [projectId, taskObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskObj.id) {
      updateTask(formInput).then(() => router.push(`/project/${taskObj.project?.id}`));
    } else {
      const payload = { ...formInput, date_created: new Date().toISOString().split('T')[0], project: projectId };
      createTask(payload).then(() => router.push(`/project/${projectId}`));
    }
  };

  return (
    <>
      <div className={formStyles.formContainer}>
        <Form onSubmit={handleSubmit} className={formStyles.form}>
          <Form.Group className="mb-3">
            <Form.Label>Task Name</Form.Label>
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
            <Form.Label>Details</Form.Label>
            <Form.Control
              className={formStyles.formInputField}
              as="textarea"
              rows={3}
              name="details"
              value={formInput.details}
              onChange={handleChange}
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              className={formStyles.formInputField}
              type="date"
              name="due_date"
              value={formInput.due_date}
              onChange={handleChange}
            />
          </Form.Group>
          {taskObj.id
            && (
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  className={formStyles.formInputField}
                  name="status"
                  onChange={handleChange}
                  value={formInput.status}
                  required
                >
                  {/* <option value="">Choose</option> */}
                  <option value="Not Started">Not Started </option>
                  <option value="In Progress">In Progress </option>
                  <option value="Complete">Complete </option>
                </Form.Select>
              </Form.Group>
            )}
          <div>
            <button type="submit" className={formStyles.formBtn}>
              {taskObj.id ? 'Edit Task' : 'Add Task'}
            </button>
          </div>
        </Form>
      </div>
      <GoBackBtn />
    </>
  );
}

TaskForm.propTypes = {
  projectId: PropTypes.string,
  taskObj: PropTypes.shape({
    id: PropTypes.number,
    project: PropTypes.string,
    name: PropTypes.string,
    details: PropTypes.string,
    date_created: PropTypes.string,
    due_date: PropTypes.string,
    status: PropTypes.string,
  }),
};

TaskForm.defaultProps = {
  projectId: '',
  taskObj: initialState,
};
