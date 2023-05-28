import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MaterialDetails from '../../components/Details/MaterialDetails';
import { getSingleMaterial } from '../../utils/data/material_data';

export default function ViewMaterialPage() {
  const [material, setMaterial] = useState({});

  const router = useRouter();
  const { materialId } = router.query;

  useEffect(() => {
    getSingleMaterial(materialId).then(setMaterial);
  }, [materialId]);

  return (
    <>
      <Head>
        <title>{material.material_name}</title>
      </Head>
      <MaterialDetails materialId={materialId} />
    </>
  );
}
