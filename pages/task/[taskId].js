/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MaterialCard from '../../components/Cards/MaterialCard';
import TaskDetails from '../../components/Details/TaskDetails';
import { getSingleTask } from '../../utils/data/task_data';

export default function ViewTaskPage() {
  const [task, setTask] = useState({});

  const router = useRouter();
  const { taskId } = router.query;

  const getTaskDetails = () => {
    getSingleTask(taskId).then(setTask);
  };

  useEffect(() => {
    getTaskDetails();
  }, [taskId]);

  return (
    <>
      <Head>
        <title>{task.name}</title>
      </Head>
      <TaskDetails taskId={taskId} />
      <hr />
      {task.materials?.length ? <h4>Task Materials:</h4> : ''}
      {task.materials?.map((material) => (
        <MaterialCard
          key={material.id}
          materialObj={material}
          onChange={getTaskDetails}
        />
      ))}
    </>
  );
}
