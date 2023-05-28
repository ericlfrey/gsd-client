import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MaterialForm from '../../../components/Forms/MaterialForm';
import { getSingleProject } from '../../../utils/data/project_data';

export default function AddMaterialPage() {
  const [project, setProject] = useState({});

  const router = useRouter();
  const { projectId } = router.query;

  useEffect(() => {
    getSingleProject(projectId).then(setProject);
  }, [projectId]);

  return (
    <>
      <Head>
        <title>Add Material to {project.title}</title>
      </Head>
      <MaterialForm projectId={projectId} />
    </>
  );
}
