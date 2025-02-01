import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { AlignLeft } from "lucide-react";
import Usericon from "./Usericon";
import { Button } from "../ui/button";
import { links } from "@/utils/links";
import { Link } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import SignOutLink from "./SignOutLink";

const DropdownListManu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <AlignLeft />
          <Usericon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {links.map((item, index) => {
          return (
            // ควรเปลี่ยนการทำ aschild เป็นใส่ span แล้วทำ blcok w-full
            <DropdownMenuItem key={index} asChild>
              <Link to={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          );
        })}
        {/* กรณียังไม่ Login */}
         <DropdownMenuSeparator />
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <span className="block w-full cursor-pointer">Login</span>
            </SignInButton>
          </DropdownMenuItem>
          
          <DropdownMenuItem >
            <SignUpButton mode="modal">
            <span className="block w-full cursor-pointer">Register</span>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        
        {/* กรณี Login แล้ว */}
        <SignedIn>
          <DropdownMenuItem>       
         
              <SignOutLink/>
          
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownListManu;
