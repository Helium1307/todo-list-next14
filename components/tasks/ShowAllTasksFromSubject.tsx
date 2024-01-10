"use server";
import { IndexTaskService } from "@/lib/services/tasks/IndexTaskSerivce";
import { Checkbox } from "../ui/checkbox";

interface ShowAllTasksFromSubjectProps {
  subjectId: string;
}

export async function ShowAllTasksFromSubject({
  subjectId,
}: ShowAllTasksFromSubjectProps) {
  const tasks = await IndexTaskService({
    subjectId,
  });

  return (
    <div>
      {tasks.map((task) => (
        <div className="flex space-x-4 items-center" key={task.id}>
          <Checkbox />
          <p>{task.name}</p>
        </div>
      ))}
    </div>
  );
}
