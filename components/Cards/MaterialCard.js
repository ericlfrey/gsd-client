import React from 'react';
import {
  Card, Col, Dropdown, Row,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cardStyles from '../../styles/CardStyles.module.css';
// import { getSingleTask } from '../../utils/data/task_data';
import { deleteMaterial } from '../../utils/data/material_data';

export default function MaterialCard({ materialObj, onChange }) {
  const handleDeleteMaterial = () => {
    if (window.confirm(`Are you sure you want to delete "${materialObj.name}"? This task cannot be undone.`)) {
      deleteMaterial(materialObj.id).then(onChange);
    }
  };

  return (
    <Card className={cardStyles.card}>
      <Card.Body>
        <Row>
          <Col>
            <Link passHref href={`/material/${materialObj.id}`}>
              <Card.Link className={cardStyles.cardLink}>{materialObj.name}</Card.Link>
            </Link>
          </Col>
          <Col>
            <Card.Text className={cardStyles.cardText}>Status: {materialObj.acquired ? 'Acquired' : 'Not Acquired'}</Card.Text>
          </Col>
          <Col>
            <Card.Text className={cardStyles.cardText}>Task: {materialObj.task ? materialObj.task.name : 'Not assigned'}</Card.Text>
          </Col>
          <Col className={cardStyles.cardDropdown}>
            <Dropdown>
              <Dropdown.Toggle className={`toggle-btn ${cardStyles.cardActionsBtn}`} variant="success" />
              <Dropdown.Menu className={cardStyles.dropdownMenu}>
                <Link passHref href={`/material/${materialObj.id}`}>
                  <Dropdown.Item className={cardStyles.dropdownItem}>Details</Dropdown.Item>
                </Link>
                <Link passHref href={`/material/edit/${materialObj.id}`}>
                  <Dropdown.Item className={cardStyles.dropdownItem}>Edit</Dropdown.Item>
                </Link>
                <Dropdown.Item className={cardStyles.dropdownItem} onClick={handleDeleteMaterial}>Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

MaterialCard.propTypes = {
  materialObj: PropTypes.shape({
    id: PropTypes.number,
    project_id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.string,
    acquired: PropTypes.bool,
    task: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};
