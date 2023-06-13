import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";
import logotype from "../../media/Logotype.svg";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        className="logotype"
        src={logotype}
        alt="The Shade of it all with drawing of Sasha Velour"
        loading="lazy"
        width="4.375rem"
        height="4.375rem"
      />
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
