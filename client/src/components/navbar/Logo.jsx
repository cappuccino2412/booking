import { Link } from "react-router";
import { Button } from "../ui/button";

const Logo = () => {
  return (
    <>
      <Button className="hidden sm:block" asChild>
        <Link to="/">Logo</Link>
      </Button>
    </>
  );
};
export default Logo;
