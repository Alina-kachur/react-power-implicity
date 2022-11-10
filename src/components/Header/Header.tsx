import { ReactComponent as LogoIcon } from "../../assets/icons/apple-logo.svg";
import "./Header.scss";
import "./media.scss";

export const Header = () => {
  return (
    <header className="header">
      <LogoIcon
        fill="white"
        width="50px "
        height="50px"
        className="header__logo"
      />
      <nav className="header__nav">
        <a href="#" className="header__nav--link">
          Features
        </a>
        <a href="#" className="header__nav--link">
          Partners
        </a>
        <a href="#" className="header__nav--link">
          Stories
        </a>
      </nav>
      <div className="header__burger">
        <p className="header__burger--line"></p>
        <p className="header__burger--line"></p>
        <p className="header__burger--line"></p>
      </div>
      <button className="header__button">Download for free</button>
    </header>
  );
};
