import { Link, Outlet } from "react-router-dom";
import * as Style from "./RootNav.style";

export const RootNav: React.FC = () => {
  return (
    <Style.Container>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="login">login</Link>
          </li>

          <li>
            <Link to="signup">login</Link>
          </li>
        </ul>
      </nav>

      <Style.Main>
        <Style.Container>
          <Outlet />
        </Style.Container>
      </Style.Main>
    </Style.Container>
  );
};
