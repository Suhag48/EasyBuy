import { Input } from "@/components/ui/input";

const FormInput = ({type, name, placeholder}) => {
  return (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      className="focus-visible:ring-transparent"
    />
  );
};

export default FormInput;
