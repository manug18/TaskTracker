export interface TaskList {
  taskId: string;
  title: string;
  description: string;
  priorityLevel: string;
  deleted: string;
  endDate: Date;
}
export interface TaskLists {
  data: TaskList[];
}
