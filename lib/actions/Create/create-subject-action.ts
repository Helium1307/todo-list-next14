"use server";
import { Subject } from "@/lib/types/entities/Subject";
import { axiosClient } from "@/utils/axios";
import { revalidatePath } from "next/cache";

export default async function createSubjectAction(
  request: Subject
): Promise<Subject | undefined> {
  try {
    const { data } = await axiosClient.post<Subject>("/subjects", request);
    revalidatePath("/");

    return data;
  } catch (error) {
    console.error(error);
  }
}
