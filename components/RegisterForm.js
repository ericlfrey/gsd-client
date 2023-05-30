import PropTypes from 'prop-types';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../utils/auth'; // Update with path to registerUser
import formStyles from '../styles/FormStyles.module.css';

function RegisterForm({ user, updateUser }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    uid: user.uid,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData).then(() => updateUser(user.uid));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={formStyles.formContainer}>
      <Form onSubmit={handleSubmit} className={formStyles.form}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="first_name"
            className={formStyles.formInputField}
            placeholder="Enter your first name"
            autoComplete="off"
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="last_name"
            className={formStyles.formInputField}
            placeholder="Enter your last name"
            autoComplete="off"
            required
            onChange={handleChange}
          />
        </Form.Group>
        <div>
          <button type="submit" className={formStyles.formBtn}>
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
