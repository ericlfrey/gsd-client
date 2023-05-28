/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MaterialCard from '../../components/Cards/MaterialCard';
import TaskCard from '../../components/Cards/TaskCard';
import ProjectDetails from '../../components/Details/ProjectDetails';
import pagesStyles from '../../styles/PagesStyles.module.css';
import { getSingleProject } from '../../utils/data/project_data';

export default function ViewProjectPage() {
  const [project, setProject] = useState({});

  const router = useRouter();
  const { projectId } = router.query;

  const getTheProjectDetails = () => {
    getSingleProject(projectId).then(setProject);
  };

  useEffect(() => {
    getTheProjectDetails();
  }, [projectId]);

  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>
      <ProjectDetails project={project} />
      <hr />
      <h4 className={pagesStyles.projectDetailsCardHeading}>Tasks:</h4>
      <div className={pagesStyles.projectDetailsTasksDiv}>
        {project.tasks?.map((task) => (
          <TaskCard
            key={task.id}
            taskObj={task}
            onChange={getTheProjectDetails}
          />
        ))}
      </div>
      <h4 className={pagesStyles.projectDetailsCardHeading}>Materials:</h4>
      <div className={pagesStyles.projectDetailsMaterialsDiv}>
        {project.materials?.map((material) => (
          <MaterialCard
            key={material.id}
            materialObj={material}
            onChange={getTheProjectDetails}
          />
        ))}
      </div>
    </>
  );
}
