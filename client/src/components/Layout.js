import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav style={{display: "flex"}}>
        <h1>Social-Engineer</h1>
        <button>
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/register">Register</Link>
        </button>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
