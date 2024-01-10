import { axiosClient } from "@/utils/axios";

const baseUrl = "/task";

export async function createTask() {
  const api = await axiosClient.get(baseUrl);

  return api.data;
}
