import { NavLink } from "react-router";
import { useAuth } from "../auth/AuthContext";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();

  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <li>
          <NavLink to="/activities">Activities</NavLink>
        </li>
        {token ? (
          <>
            <li>
              <NavLink to="/" onClick={() => logout()}>
                Log out
              </NavLink>
            </li>
            <li>
              <NavLink to="/account">Account</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </>
        )}
      </nav>
    </header>
  );
}
