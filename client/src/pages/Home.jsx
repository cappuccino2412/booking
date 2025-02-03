import MapHome from "@/components/map/MapHome";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

const Home = () => {
  return (
    <>
     <MapHome/>
    </>
  );
};
export default Home;
