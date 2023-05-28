/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  Card, Col, Dropdown, Row,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cardStyles from '../../styles/CardStyles.module.css';
import { deleteTask } from '../../utils/data/task_data';

export default function TaskCard({ taskObj, onChange }) {
  const handleDeleteTask = () => {
    if (window.confirm(`Are you sure you want to delete "${taskObj.name}"? This task cannot be undone.`)) {
      deleteTask(taskObj.id).then(onChange);
    }
  };

  return (
    <Card className={cardStyles.card}>
      <Card.Body>
        <Row>
          <Col>
            <Link passHref href={`/task/${taskObj.id}`}>
              <Card.Link className={cardStyles.cardLink}>{taskObj.name}</Card.Link>
            </Link>
          </Col>
          <Col>
            <Card.Text className={cardStyles.cardText}>
              Status: {taskObj.status}
            </Card.Text>
          </Col>
          <Col>
            <Card.Text className={cardStyles.cardText}>
              Due Date: {taskObj.due_date ? new Date(taskObj.due_date).toLocaleDateString() : 'No date set'}
            </Card.Text>
          </Col>
          <Col className={cardStyles.cardDropdown}>
            <Dropdown>
              <Dropdown.Toggle className={`toggle-btn ${cardStyles.cardActionsBtn}`} variant="success" />
              <Dropdown.Menu className={cardStyles.dropdownMenu}>
                <Link passHref href={`/task/${taskObj.id}`}>
                  <Dropdown.Item className={cardStyles.dropdownItem}>Details</Dropdown.Item>
                </Link>
                <Link passHref href={`/task/edit/${taskObj.id}`}>
                  <Dropdown.Item className={cardStyles.dropdownItem}>Edit</Dropdown.Item>
                </Link>
                <Dropdown.Item className={cardStyles.dropdownItem} onClick={handleDeleteTask}>Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

TaskCard.propTypes = {
  taskObj: PropTypes.shape({
    id: PropTypes.number,
    project_id: PropTypes.string,
    name: PropTypes.string,
    details: PropTypes.string,
    date_created: PropTypes.string,
    due_date: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};
