export interface TaskList {
  taskId: string;
  title: string;
  description: string;
  priorityLevel: string;
  deleted: string;
  endDate: string;
}
export interface TaskLists {
  data: TaskList[];
}

export interface CreateTaskModel {
  title: string;
  description: string;
  priorityLevel: string;
  isDeleted: boolean;
  endDate: string;
}
