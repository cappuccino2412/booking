import TextAreaInput from "@/components/form/TextAreaInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInputs from "@/components/form/Forminputs";
import { campingSchema } from "@/utils/shema";
import Buttons from "@/components/form/Buttons";
import SplitText from "@/components/ui/splitText";
import CategoryInput from "@/components/form/CategoryInput";
import MainMap from "@/components/map/MainMap";
import { createCamping } from "@/api/camping";
//clerk
import {useAuth} from '@clerk/clerk-react'
/*ReadMe*/
/*
  register เป็นฟังก์ชันที่ใช้ผูก input ในฟอร์มกับ React Hook Form เพื่อให้สามารถควบคุมค่าของ input ได้
  handleSubmit เป็นฟังก์ชันที่ใช้สำหรับจัดการเมื่อผู้ใช้กดปุ่ม submit
  formState ใช้เพื่อเข้าถึงสถานะของฟอร์ม เช่น ข้อมูล error, การ validate, และสถานะการส่งข้อมูล
  || = first true, && = first false
  */
const Camping = () => {
  const {getToken,userId} = useAuth()
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(campingSchema), //เรียกใช้ fn จาก shema
  });
  const { errors, isSubmitting } = formState; //เรียกใช้ fn จาก formState
  // console.log(isSubmitting); // กำลัง submit เป็น true ไม่ได้ submit เป็น false

  const hdlSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); //resolve คือการทำงานเสร็จแล้ว
    const token = await(getToken())
    createCamping(token,data)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log('API Error',err);
    })
    console.log(data);
  };

  return (
    <section>
      <h1 className="text-center my-4">
        <SplitText
          text="Create, Camp!"
          className="text-3xl font-bold text-center"
          delay={50}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
      </h1>
      <div className="border p-8 rounded-md">
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="grid md:grid-cols-2 gap-2">
            <FormInputs
              register={register}
              id="title"
              name="title"
              type="text"
              placeholder="title..."
              errors={errors}
            />
            <FormInputs
              register={register}
              id="price"
              name="price"
              type="number"
              placeholder="price..."
              errors={errors}
            />
            <TextAreaInput
              register={register}
              id="description"
              name="description"
              type="text"
              placeholder="description..."
              errors={errors}
            />
            <CategoryInput
              id="category"
              name="category"
              register={register}
              setValue={setValue}
            />
          </div>
          <MainMap register={register} setValue={setValue}/>
          <Buttons
            text="Create camping"
            isPending={isSubmitting}           
          />
        </form>
      </div>
    </section>
  );
};
export default Camping;
