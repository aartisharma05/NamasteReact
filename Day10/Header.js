
const Title = () => (
  <div className="logo">
    <a href="/">
      <img
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8b0v-Bsuarn4-QOJdvE1-bNC7YMt4ARCEVg&usqp=CAU"
      />
    </a>
  </div>
);





const Header = () => {
  return (
    <div className="header">
      <Title />
      <h1>Mangolia</h1>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
