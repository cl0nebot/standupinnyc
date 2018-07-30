import Link from "./Link";

export default ({ path, active, text }) => {
  const selectedMenuClass = "pure-menu-selected pure-menu-item";
  const menuClass = "pure-menu-item";

  return (
  <li className={active ? selectedMenuClass : menuClass}>
    <Link prefetch withData href={path}>
      <a
        className="pure-menu-link"
      >
        {text}
      </a>
    </Link>
  </li>

)
}