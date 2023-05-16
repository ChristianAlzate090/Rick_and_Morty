import './Header.css'

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="portal">
          <img src="./public/portal.gif" alt="portal" />
        </div>
        <div className='title'>
          <img src="./public/logo.png" alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Header;
