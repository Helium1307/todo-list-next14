"use client";
import { Subject, subjectSchema } from "@/lib/types/entities/Subject";
import { Form } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { InputField } from "../InputField";

type SubjectFormProps = {
  subject?: Subject;
  action: (data: Subject) => Promise<Subject | undefined>;
};

export default function SubjectForm({ subject, action }: SubjectFormProps) {
  const { control, ...form } = useForm<Subject>({
    resolver: zodResolver(subjectSchema),
    mode: "onChange",
    defaultValues: {
      name: subject?.name || "",
    },
  });

  const onSubmit: SubmitHandler<Subject> = async (data) => {
    await action(data);
    form.reset();
  };
  return (
    <Form control={control} {...form}>
      <form
        className="w-full h-full flex flex-col space-y-3 justify-center items-center"
        onSubmit={form.handleSubmit(onSubmit)}
        // action={action}
      >
        <InputField
          label="Nome do Tópico"
          name="name"
          control={control as unknown as Control<FieldValues>}
        />
        <button
          type="submit"
          className="border rounded bg-zinc-800 text-zinc-100 px-7 py-2"
          disabled={form.formState.isSubmitting}
        >
          Criar
        </button>
      </form>
    </Form>
  );
}
