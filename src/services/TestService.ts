import { getAxiosInstance, getNetworkConfig } from "./BaseService";

import { Endpoints } from "./Endpoint";
import { TaskLists } from "./models/TaskModel";

export async function getAllTask() {
  const axios = getAxiosInstance();
  const res = await axios.get<TaskLists>(
    Endpoints.getAllTasks,
    getNetworkConfig(false)
  );

  return res.data;
}
