import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import TaskForm from '../../../components/Forms/TaskForm';
import { getSingleProject } from '../../../utils/data/project_data';

export default function AddTaskPage() {
  const [project, setProject] = useState({});

  const router = useRouter();
  const { projectId } = router.query;

  useEffect(() => {
    getSingleProject(projectId).then(setProject);
  }, [projectId]);

  return (
    <>
      <Head>
        <title>Add Task to {project.title}</title>
      </Head>
      <TaskForm projectId={Number(projectId)} />
    </>
  );
}
