import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FormInputs = (props) => {
  // สามารถทำ distructuring ตั้งแต่รับ props ได้เลย โดยเขียนเป็น {register}
  const { register,id, name, type, placeholder, errors } = props;
  
  return (
    <>
      <div>
        <Label htmlFor={name} className="capitalize" autoComplete="off">
          {name}
        </Label>
        <Input
          {...register(name)}
          id={id}
          autoComplete="off"
          type={type}
          placeholder={placeholder}
          //&& First false หากไม่ error จะส่งค่า undefined ออกมา
          className={`${errors[name] && "border-red-500"}`} 
        />
        {
          errors[name] && <p className="text-red-500 text-sm">{errors[name]?.message}</p>
        }
      </div>
    </>
  );
};
export default FormInputs;
