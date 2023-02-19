import { Link, Outlet } from "react-router-dom";

export const RootNav: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="login">login</Link>
          </li>
        </ul>
      </nav>


      <main>
        <Outlet />
        </main>
    </div>
  );
};
