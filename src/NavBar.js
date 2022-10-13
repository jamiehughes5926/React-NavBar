import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <CustomLink to="/Pricing">Pricing</CustomLink>
        <CustomLink to="/About">About</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li>
      <a className={isActive ? "active" : ""} to={to} {...props}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </a>
    </li>
  );
}
