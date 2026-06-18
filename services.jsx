import { Link, Outlet } from "react-router-dom";

function Services() {
  return (
    <div>
      <h2>Services Page</h2>

      <p>Select a service below:</p>

      <div className="subMenu">
        <Link to="web-development">Web Development</Link>
        <Link to="app-development">App Development</Link>
        <Link to="uiux-design">UI/UX Design</Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Services;
