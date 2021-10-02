import "../css/Header.css";
import CardHolder from "./CardHolder";

const Header = () => {
  return (
    <CardHolder>
      <div>
        <div className="app-header">
          <div className="app-header__name">Survey Time</div>
        </div>
        <div className="app-header__border"></div>
      </div>
    </CardHolder>
  );
};

export default Header;
