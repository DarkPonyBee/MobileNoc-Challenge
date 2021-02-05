export enum TASK_STATUS {
  DONE = 'done',
  PROGRESS = 'in-progress',
  PENDING = 'pending',
}

export type Task = {
  id: string;
  name: string;
  due_date: string;
  status: TASK_STATUS;
};
