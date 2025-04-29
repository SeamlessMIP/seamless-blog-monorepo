
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  isRequired?: boolean;
}

const FormField = ({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder = "",
  error = false,
  errorMessage = "",
  isRequired = false
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="flex items-center gap-1">
        {label}
        {isRequired && <span className="text-red-500">*</span>}
      </Label>
      <Input 
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`border-orange-200 focus-visible:ring-orange-500 ${error ? 'border-red-500' : ''}`}
        aria-invalid={error}
      />
      {error && errorMessage && (
        <p className="text-sm text-red-500 mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default FormField;
