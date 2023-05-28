/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ProjectForm from '../../../components/Forms/ProjectForm';
import { getSingleProject } from '../../../utils/data/project_data';

export default function EditProjectPage() {
  const [project, setProject] = useState({});

  const router = useRouter();
  const { projectId } = router.query;

  useEffect(() => {
    getSingleProject(projectId).then(setProject);
  }, [projectId]);

  return (
    <>
      <Head>
        <title>Edit {project.title}</title>
      </Head>
      <ProjectForm projectObj={project} />
    </>
  );
}
