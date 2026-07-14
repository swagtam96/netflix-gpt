import { Logo } from "../utils/PageLinks";

const Header = () => {
  return (
    <div className="sticky z-20 top-0 px-34 py-6">
      <div className="h-9 w-37">
        <img src={Logo} alt="Logo"></img>
      </div>
    </div>
  );
};

export default Header;
