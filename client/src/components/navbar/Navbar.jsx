import DropdownListManu from "./DropdownListManu";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center p-6 justify-between sm:flex-row gap-4">
        <Logo />
        <Searchbar/>
       <DropdownListManu/>
      </div>
    </nav>
  );
};
export default Navbar;
