import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MaterialForm from '../../../components/Forms/MaterialForm';
import { getSingleMaterial } from '../../../utils/data/material_data';

export default function EditMaterialPage() {
  const [material, setMaterial] = useState({});

  const router = useRouter();
  const { materialId } = router.query;

  useEffect(() => {
    getSingleMaterial(materialId).then(setMaterial);
  }, [materialId]);

  return (
    <>
      <Head>
        <title>Edit {`${material.material_name}`}</title>
      </Head>
      <MaterialForm
        materialObj={material}
        projectId={material.project?.id}
      />
    </>
  );
}
