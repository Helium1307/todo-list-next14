import { Task } from "@/lib/types/entities/Task";

export default async function createTaskAction(request: Task) {
  "use server";

  console.log(request);
}
