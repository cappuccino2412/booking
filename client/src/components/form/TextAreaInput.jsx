import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const TextAreaInput = (props) => {
  // สามารถทำ distructuring ตั้งแต่รับ props ได้เลย โดยเขียนเป็น {register}
  const { register,id, name, type, placeholder,errors } = props;
  return (
    <>
      <div>
        <Label htmlFor={name} className="capitalize" autoComplete="off">
          {name}
        </Label>
        <Textarea
          {...register(name)} 
          id={id}    
          autoComplete="off"
          type={type}
          placeholder={placeholder}
          rows={5}
          className={`${errors[name] && "border-red-500"}`}
        />
        {
          errors[name] && <p className="text-red-500 text-sm">{errors[name]?.message}</p>
        }
      </div>
    </>
  );
};
export default TextAreaInput;
