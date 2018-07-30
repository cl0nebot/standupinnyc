import Link from "./Link";
import { withRouter } from "next/router";
import HeaderLink from "./HeaderLink";

const Header = ({ router: { pathname } }) => {
  const selectedMenuClass = "pure-menu-selected pure-menu-item";
  const menuClass = "pure-menu-item";
  return (
    <header className="pure-menu pure-menu-horizontal">
      <Link prefetch withData href="/">
        <a
          className={
            pathname === "/"
              ? "pure-menu-selected pure-menu-heading pure-menu-link"
              : "pure-menu-heading pure-menu-link"
          }
        >
          Standupin.NYC
        </a>
      </Link>
      <ul className="pure-menu-list">
        <HeaderLink active={pathname === "/venues"} text="Venues" path="/venues" />
        <HeaderLink active={pathname === "/shows"} text="Shows" path="/shows" />
        <HeaderLink active={pathname === "/comedians"} text="Comedians" path="/comedians" />
        <HeaderLink active={pathname === "/about"} text="About" path="/about" />
      </ul>
      <style jsx>{`
       `}</style>
    </header>
  );
};
export default withRouter(Header);
