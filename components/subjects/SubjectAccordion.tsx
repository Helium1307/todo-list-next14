import { Subject } from "@/lib/types/entities/Subject";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { IndexTaskService } from "@/lib/services/tasks/IndexTaskSerivce";
import { ShowAllTasksFromSubject } from "../tasks/ShowAllTasksFromSubject";

interface SubjectAccordionProps {
  subject: Subject;
}

export function SubjectAccordion({ subject }: SubjectAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={subject.id || Math.random().toString()}>
        <AccordionTrigger>{subject.name}</AccordionTrigger>
        {/* {tasks.map((task) => ( */}
        {/* <AccordionContent key={task.id}>{task.name}</AccordionContent> */}
        <AccordionContent>
          <ShowAllTasksFromSubject subjectId={subject.id!!} />
        </AccordionContent>
        {/* ))} */}
      </AccordionItem>
    </Accordion>
  );
}
