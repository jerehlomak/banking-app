import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Control, FieldPath, FieldValues } from "react-hook-form"
import { authFormSchema } from "@/lib/utils/utils";

const formSchema = authFormSchema('sign-up')

interface CustomInputProps {
    name: FieldPath<z.infer<typeof formSchema>>;
    form: {
        control: Control<z.infer<typeof formSchema>>;
    };
    type: string;
    label:  string;
    placeholder: string;
}

const CustomInput = ({ name, form, type, label, placeholder }: CustomInputProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <div className="form-item">
            <FormLabel className="form-label">{label}</FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input
                  placeholder={placeholder}
                  className="input-class"
                  type={type}
                  {...field}
                />
              </FormControl>
              <FormMessage className="form-message mt-2" />
            </div>
          </div>
        )}
      />
    </>
  );
};

export default CustomInput;
