/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';
import formStyles from '../../styles/FormStyles.module.css';
import GoBackBtn from '../GoBackBtn/GoBackBtn';
import { createProject, updateProject } from '../../utils/data/project_data';

const initialState = {
  title: '',
  uid: '',
  date_created: '',
};

export default function ProjectForm({ projectObj }) {
  const [formInput, setFormInput] = useState(initialState);

  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (projectObj.id) setFormInput(projectObj);
  }, [projectObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectObj.id) {
      updateProject(formInput).then(() => router.push(`/project/${projectObj.id}`));
    } else {
      const payload = {
        ...formInput, uid: user.uid, date_created: new Date().toISOString().split('T')[0],
      };
      createProject(payload).then((project) => router.push(`/project/${project.id}`));
    }
  };

  return (
    <>
      <div className={formStyles.formContainer}>
        <Form onSubmit={handleSubmit} className={formStyles.form}>
          <Form.Label>{projectObj.id ? 'Edit Project Name' : 'Enter Project Name'}</Form.Label>
          <InputGroup className="m-auto">
            <Form.Control
              className={formStyles.formInputField}
              type="text"
              name="title"
              value={formInput.title}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <button type="submit" className={formStyles.formBtn}>
              {projectObj.id ? 'Edit' : '+'}
            </button>
          </InputGroup>
        </Form>
      </div>
      <GoBackBtn />
    </>
  );
}

ProjectForm.propTypes = {
  projectObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    uid: PropTypes.string,
    date_created: PropTypes.string,
  }),
};

ProjectForm.defaultProps = {
  projectObj: initialState,
};
