import Buttons from "@/components/form/Buttons";
import FormInputs from "@/components/form/Forminputs";
import axios from "axios";
import { useForm } from "react-hook-form";
import { profileSchema } from "@/utils/shema";
import { zodResolver } from "@hookform/resolvers/zod";
//clerk
import {useAuth} from '@clerk/clerk-react'
import { createProfile } from "@/api/profile";

const Profile = () => {

    const {getToken,userId} = useAuth()
    const { register, handleSubmit, formState, setValue } = useForm({
        resolver: zodResolver(profileSchema),
    });

    
    const { errors, isSubmitting } = formState;
    const eieiSubmit = async (data) => {
        const token = await getToken()
        await createProfile(token,data)
        .then((res)=>{
            console.log(res)
        })
        .catch((err) => {
            console.log('API Error',err);
        }) 
        // await new Promise((resolve) => setTimeout(resolve, 1000)); 
        //resolve คือการทำงานเสร็จแล้วจะเข้า then ถ้า error reject จะเข้า catch     
      
      };
  return (
    <section>
        <h1 className="capitalize text-xl font-bold mb-4">
            create profile
        </h1>
        <div className="border p-8 rounded-md">
            <form onSubmit={handleSubmit(eieiSubmit)}>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <FormInputs
                    register={register}
                    name="firstname"
                    type="text"
                    placeholder="Input your firstname"
                    errors={errors}                  
                    />
                    <FormInputs
                    register={register}
                    name="lastname"
                    type="text"
                    placeholder="Input your lastname"
                    errors={errors}                  
                    />
                    <Buttons 
                    text="create profile"
                    isPending={isSubmitting}
                    />
                </div>
            </form>
        </div>
    </section>
  )
}
export default Profile