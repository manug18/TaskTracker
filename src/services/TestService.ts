import { getAxiosInstance, getNetworkConfig } from "./BaseService";

import { Endpoints } from "./Endpoint";
import { CreateTaskModel, TaskList, TaskLists } from "./models/TaskModel";

export async function getAllTask() {
  const axios = getAxiosInstance();
  const res = await axios.get<TaskLists>(
    Endpoints.getAllTasks,
    getNetworkConfig(false)
  );

  return res.data;
}

export async function addTask(request: CreateTaskModel) {
  const axios = getAxiosInstance();
  const res = await axios.post(
    Endpoints.getAllTasks,
    request,
    getNetworkConfig(false)
  );
  return res.data;
}
export async function editTask(request: TaskList) {
  const axios = getAxiosInstance();
  const res = await axios.put(
    Endpoints.getAllTasks,
    request,
    getNetworkConfig(false)
  );
  return res.data;
}
