function Header() {
    return (
      <div className="Header">
        <header className="header-logo-text">
          <img src={`${process.env.PUBLIC_URL}/images/favicon.svg`} className="Header-title-logo" alt="logo" />
          <h2 className="Header-title-text">Meme Generator</h2>
        </header>
        <h4 className="header-project-name">React Course - Project 3</h4>
      </div>
    );
  }

  export default Header;