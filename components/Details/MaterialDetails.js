import React, { useEffect, useState } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import cardStyles from '../../styles/CardStyles.module.css';
import { getSingleMaterial } from '../../utils/data/material_data';

export default function MaterialDetails({ materialId }) {
  const [material, setMaterial] = useState({});

  // const router = useRouter();

  useEffect(() => {
    getSingleMaterial(materialId).then(setMaterial);
  }, [materialId]);

  const handleDeleteMaterial = () => {
    // if (window.confirm(`Are you sure you want to delete "${material.material_name}"? This task cannot be undone.`)) {
    //   deleteMaterial(firebaseKey).then(router.push(`/project/${project.firebaseKey}`));
    // }
  };

  return (
    <Card className={cardStyles.topCard}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div className={cardStyles.cardHeader}>
            <h3>{material.name}</h3>
            <Dropdown>
              <Dropdown.Toggle variant="outline-success" className={`toggle-btn ${cardStyles.cardActionsBtn}`}>
                Actions
              </Dropdown.Toggle>
              <Dropdown.Menu className={cardStyles.dropdownMenu}>
                <Link passHref href={`/material/edit/${materialId}`}>
                  <Dropdown.Item className={cardStyles.dropdownItem}>Edit</Dropdown.Item>
                </Link>
                <Dropdown.Item className={cardStyles.dropdownItem} onClick={handleDeleteMaterial}>Delete Task
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <hr />
          <h4>Total Material Cost: ${(material.price * material.quantity).toFixed(2)}</h4>
          <footer className={`${cardStyles.cardSubtitle} blockquote-footer mt-2`}>Project: {material.project?.title}</footer>
          <footer className={`${cardStyles.cardSubtitle} blockquote-footer mt-2`}>Task: {material.task?.name ? material.task?.name : 'Not assigned to task'}</footer>
          <hr />
          <h4>Details:</h4>
          <Card.Text className={`${cardStyles.detailsText} mt-2`}>Status: {material.acquired ? 'Acquired' : 'Not Acquired'}</Card.Text>
          <Card.Text className={`${cardStyles.detailsText} mt-2`}>Price: ${material.price}</Card.Text>
          <Card.Text className={`${cardStyles.detailsText} mt-2`}>Quantity: {material.quantity}</Card.Text>
          <Link passHref href={`/project/${material.project?.id}`}>
            <Card.Link className={cardStyles.goBackBtn}> ← Go Back</Card.Link>
          </Link>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

MaterialDetails.propTypes = {
  materialId: PropTypes.number.isRequired,
};
