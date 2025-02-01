import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { categories } from "@/utils/categories";

const CategoryInput = ({ id,name, register, setValue }) => {
  return (
    <div className="mb-2">
        <input hidden {...register(name)} id={id}/>
      <Label htmlFor={name} className="capitalize">
        {name}
      </Label>
      <Select 
      onValueChange={(value) => setValue(name, value)}
      required>
        <SelectTrigger>
          <SelectValue placeholder="Please Select Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((item) => {
            return (
              <SelectItem 
              
              key={item.label}
              value={item.label}>
                <span className="flex items-center gap-3">
                   <item.icon className="w-6 h-6 mr-2" />
                   <p className="capitalize">
                    {item.label}

                   </p>
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default CategoryInput;
