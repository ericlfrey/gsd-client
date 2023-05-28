import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import TaskForm from '../../../components/Forms/TaskForm';
import { getSingleTask } from '../../../utils/data/task_data';

export default function EditTaskPage() {
  const [task, setTask] = useState({});

  const router = useRouter();
  const { taskId } = router.query;

  useEffect(() => {
    getSingleTask(taskId).then(setTask);
  }, [taskId]);

  return (
    <>
      <Head>
        <title>Edit {`${task.name}`}</title>
      </Head>
      <TaskForm taskObj={task} />
    </>
  );
}
