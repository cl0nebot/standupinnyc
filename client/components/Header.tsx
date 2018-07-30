import Link from "./Link";
import { withRouter } from "next/router";

const Header = ({ router: { pathname } }) => (
  <header>
    <Link prefetch withData href="/">
      <a className={pathname === "/" ? "is-active" : ""}>Home</a>
    </Link>
    <Link prefetch withData href="/venues">
      <a className={pathname === "/venues" ? "is-active" : ""}>Venues</a>
    </Link>

    <Link prefetch withData href="/comedians">
      <a className={pathname === "/comedians" ? "is-active" : ""}>Comedians</a>
    </Link>

    <Link prefetch withData href="/shows">
      <a className={pathname === "/shows" ? "is-active" : ""}>Shows</a>
    </Link>

    <Link prefetch href="/about">
      <a className={pathname === "/about" ? "is-active" : ""}>About</a>
    </Link>


    <style jsx>{`
      header {
        margin-bottom: 25px;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
  </header>
);

export default withRouter(Header);
