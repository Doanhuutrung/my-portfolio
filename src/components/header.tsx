const Header = () => (
  <header>
    <h1 className="flex justify-between p-4 bg-gray-900 text white">
      {" "}
      Hello ! my name is Huu Trung{" "}
    </h1>
    <nav>
      <a href="#project" className="mx-2 hover:underline">
        {" "}
        Projects{" "}
      </a>
      <a href="#about" className="mx-2 hover:underline">
        {" "}
        About Me{" "}
      </a>
      <a href="#contact" className="mx-2 hover:underline">
        {" "}
        Contact Me{" "}
      </a>
    </nav>
  </header>
);
export default Header;
