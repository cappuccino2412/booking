import { SignOutButton } from "@clerk/clerk-react"
import { useToast } from "@/hooks/use-toast"

const SignOutLink = () => {
    const {toast} = useToast()
    const handleLogout = () => {
       toast({
         title: "Logged out",
         description: "You have been logged out",
         status: "success",
       })
    }

  return (
    <SignOutButton redirectUrl="/">
      <span onClick={handleLogout} className="block w-full cursor-pointer">Logout</span>
    </SignOutButton>
  )
}
export default SignOutLink