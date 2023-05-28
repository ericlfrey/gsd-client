import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import { createTask, updateTask } from '../../api/taskData';
import formStyles from '../../styles/FormStyles.module.css';
import GoBackBtn from '../GoBackBtn/GoBackBtn';
import { createTask, updateTask } from '../../utils/data/task_data';

const initialState = {
  id: '',
  project_id: '',
  task_name: '',
  details: '',
  date_created: '',
  due_date: '',
  status: '',
};

export default function TaskForm({ projectId, taskObj }) {
  const [formInput, setFormInput] = useState(initialState);

  const router = useRouter();

  useEffect(() => {
    if (taskObj.id) setFormInput(taskObj);
  }, [taskObj]);

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
      updateTask(formInput).then(() => router.push(`/task/${taskObj.id}`));
    } else {
      const payload = { ...formInput, date_created: new Date(), project_id: projectId };
      createTask(payload).then(({ name }) => {
        const patchPayload = { id: name };
        updateTask(patchPayload).then(() => router.push(`/project/${projectId}`));
      });
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
              name="task_name"
              value={formInput.task_name}
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
                <div key="inline-radio" className="mb-3">
                  <Form.Check
                    inline
                    id="todo"
                    type="radio"
                    label="To Do"
                    name="todo"
                    checked={formInput.todo}
                    onChange={(e) => {
                      setFormInput((prevState) => ({
                        ...prevState,
                        todo: e.target.checked,
                        in_progress: !e.target.checked,
                        complete: !e.target.checked,
                      }));
                    }}
                  />
                  <Form.Check
                    inline
                    id="in_progress"
                    type="radio"
                    label="In Progress"
                    name="in_progress"
                    checked={formInput.in_progress}
                    onChange={(e) => {
                      setFormInput((prevState) => ({
                        ...prevState,
                        in_progress: e.target.checked,
                        todo: !e.target.checked,
                        complete: !e.target.checked,
                      }));
                    }}
                  />
                  <Form.Check
                    inline
                    id="complete"
                    type="radio"
                    label="Complete"
                    name="complete"
                    checked={formInput.complete}
                    onChange={(e) => {
                      setFormInput((prevState) => ({
                        ...prevState,
                        complete: e.target.checked,
                        in_progress: !e.target.checked,
                        todo: !e.target.checked,
                      }));
                    }}
                  />
                </div>
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
    id: PropTypes.string,
    project_id: PropTypes.string,
    task_name: PropTypes.string,
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
