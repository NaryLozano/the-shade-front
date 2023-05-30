import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        className="logotype"
        src="./media/Logotype.svg"
        alt="The Shade of it all with drawing of Sasha Velour"
      />
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
