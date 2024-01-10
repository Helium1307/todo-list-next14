"use server";
import { IFilterParams } from "@/lib/types";
import { Task } from "@/lib/types/entities/Task";
import { axiosClient } from "@/utils/axios";

const baseUrl = "/tasks";

export async function IndexTaskService(
  params: IFilterParams<Task>
): Promise<Task[]> {
  const tasks = await axiosClient.get(baseUrl, { params });

  return tasks.data;
}
