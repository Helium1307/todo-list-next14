import { ComponentProps } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface InputFieldProps
  extends Omit<ComponentProps<typeof FormField>, "render"> {
  label: string;
}

export const InputField = ({ label, ...rest }: InputFieldProps) => {
  return (
    <FormField
      {...rest}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
