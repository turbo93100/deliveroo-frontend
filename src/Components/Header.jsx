import logo from "./assets/images/logo-teal.svg";

const Header = ({ title, images, description }) => {
  return (
    <>
      <header>
        <div className="top-nav">
          <div className="top-nav-center">
            <img className="logo" src={logo} alt="logo" />
          </div>
        </div>

        <div className="hero">
          <div className="restaurant-infos-center">
            <div className="restaurant-infos-text">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <img src={images} alt="meal" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
