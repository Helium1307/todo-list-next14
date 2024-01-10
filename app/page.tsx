import { Card, CardContent } from "@/components/ui/card";

import { Subject } from "@/lib/types/entities/Subject";
import SubjectForm from "@/components/subjects";
import { axiosClient } from "@/utils/axios";
import createSubjectAction from "@/lib/actions/Create/create-subject-action";
import { SubjectAccordion } from "@/components/subjects/SubjectAccordion";

const getSubject = async (): Promise<Subject[]> => {
  const { data } = await axiosClient.get<Subject[]>("/subjects");
  return data;
};

export default async function Home() {
  const subjects = await getSubject();

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <Card className="w-1/4 h-2/3">
        <CardContent className="w-full h-full">
          {subjects.length > 0 ? (
            <>
              {subjects.map((subject) => (
                <SubjectAccordion subject={subject} />
              ))}
            </>
          ) : (
            <SubjectForm action={createSubjectAction} />
          )}
        </CardContent>
      </Card>
    </main>
  );
}
