import { Button } from "../ui/button"
import { LoaderCircle } from 'lucide-react';

const Buttons = ({text,isPending}) => {
  return (
    <Button    
    className="capitalize mt-2" disabled={isPending}   
    >
      {
        isPending 
        ? <>
        <LoaderCircle className="animate-spin"/>
        <span className="ml-2">Loading...</span>
        </>
        : <p>{text}</p>
      }
      
    </Button>
  )
}
export default Buttons